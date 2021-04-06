

# 使用 React Portal 实现一个通知栏组件

## 需求

很多时候，我们需要定义一些 DOM 结构独立于 React 应用，但又要能够使用 React 特性的组件，它们要求不受父组件的 zIndex 影响，比如 toast, modal, notification 组件等。

在没有 portals 功能时，我们通常是封装一个对应的组件，对它设置固定/绝对定位，然后在需要的页面 render 函数中进行调用。这样做的问题是，如果页面中的父组件已经设置了定位，那么无论你设置多大的 z-index，都无法突破父组件的层级，来对父组件同级、甚至更高层级的元素实现覆盖。

而在 React 16 版本中，新增了 portals api，我们可以利用它，将一堆自定义的元素追加到独立于 React 组件树之外的一个DOM元素中（比如 body），来实现对父组件的CSS层级突破，而它在 React 组件树中，仍然属于原本的位置，并不影响数据流向。

接下来，我们使用它来实现一个独立于 React 组件树结构之外的 notification(通知栏) 组件。

## 实现

话不多说，直接上代码：

第一部分，组件内部实现：

```tsx
/**
 * 通知栏组件
 */
const Notification = React.memo((props: {
	children: JSX.Element | string
	onClose?: () => void
})=>{

	const { children, onClose } = props

	const container = useRef(document.createElement('div')) // 这里必须使用 useRef，不然每次渲染之后都需要重新创建div，会出现只有第一次渲染出现了内容的bug

	useEffect(()=>{
		container.current.classList.add('notify-portal-container')
		document.documentElement.appendChild(container.current)
		return () => {
			document.documentElement.removeChild(container.current)
		}
	}, [props.children])

	return (
		ReactDOM.createPortal(
			<React.Fragment>
				<div className="notify-portal-content">
					{props.children}
				</div>
				<div className="notify-portal-close"
					onClick={()=>{ onClose ? onClose() : void 0 }}
				>
					<IconClose />
				</div>
			</React.Fragment>,
			container.current
		)
	)
})

export default Notification
```

因为通知栏组件内部是一个无状态的组件，只有props改变才会触发重新渲染，所以我们使用React.memo进行包裹，优化性能。除了默认的 children 之外，我们还往外暴露一个 onClose 的可选 prop，让用户可操作关闭通知栏。

使用 useRef 之后，container 的引用永远都是同一个对象，useEffect 在 props.children 修改后才会重新渲染。

第二部分，如何使用自定义 hook 来调用？

```tsx
/**
 * 封装 hook
 */
export const useNotify = (): {
	/**
	 * 展示通知栏
	 */
	show: () => void
	/**
	 * 隐藏通知栏
	 */
	hide: () => void
	/**
	 * 渲染通知栏
	 */
	RenderNotification: (props: {children: JSX.Element | string}) => any
} => {

	const [ visible, setVisible ] = useState(false)

	const show = () => setVisible(true)
	const hide = () => setVisible(false)
	const RenderNotification = ({children}: {children: JSX.Element | string}) => {
		return (
			visible ? <Notification onClose={hide} >
				{children}
			</Notification> : null
		)
	}

	return {
		show,
		hide,
		RenderNotification
	}
}
```

这个 hook 不需要接收参数，直接暴露 show 和 hide API，顾名思义也就是展示和关闭通知栏。

`RenderNotification` 是一个渲染通知内容的方法，它是一个 React 组件，只接收 children 作为内容，没有其他任何属性。

第三部分，如何调用？

```tsx
const { show, RenderNotification } = useNotify()

useEffect(() => {
	show()
}, [])

return (
	<RenderNotification>
		<React.Fragment>
			今天是{timeStr}, 祝大家牛年大吉啦
		</React.Fragment>
	</RenderNotification>
)
```

在初次渲染时根据页面逻辑决定是否展示通知，用户可点击隐藏按钮关闭通知栏展示。