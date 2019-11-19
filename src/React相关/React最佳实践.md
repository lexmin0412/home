# React最佳实践

## 1. 使用组件复合而非组件继承

在项目中的复业务开发中，可能涉及到比较复杂的业务。比如商品详情的规格型号弹窗，可能在多个页面中都需要复用，那么就会想到单独拆分成一个组件。但它又包含了很多的元素，涉及到商品图片、规格型号选择、数量选择、确定按钮、关闭按钮等多个部分，如果再往下拆分，又可以拆分成商品信息组件、规格选择组件、数量选择组件、确认按钮等等，如果这样一直往下拆分，继承组件属性就有可能产生如下的代码：
```jsx
import React, { Component } from 'react'
import { Flex, Modal } from 'antd-mobile'
import { DisplayTagsGroup, ClickableTagsGroup, NumberSelect, Card, Close, RecButton, ButtonsGroup } from 'components'
import stySizeSelectModal from './sizeselectmodal.less'

/* 规格型号选择弹窗组件
 * @modalVisible 弹窗是否可见 Boolean
 * @handleClose 弹窗关闭事件处理函数 Function
 * @data 规格/型号/数量相关数据 Object
 * @typeCheck 规格选择事件处理函数 Function
 * @sizeCheck 型号选择事件处理函数 Function
 * 
 * @checkSizeState 选中型号状态
 * @checkTypeState 选中规格状态
 * @sizePrice 型号规格价格
 * @sizeStock 型号规格库存
 * 
 * @defaultNum 默认数量 Number 如果有设置起量则等于起量数值
 * @handlePlus 加号点击事件处理函数 Function
 * @handleMinus 减号点击事件处理函数 Function
 * @handleNumChange 数量变化事件处理函数 Function
 * @selectedNum 数量 Number
 * @singleButtonVisible 单按钮组件是否可见 Boolean
 * @multiButtonsVisible 多按钮组件是否可见 Boolean
 * @handleConfirm 单按钮点击事件处理函数 Function
 * @confirmFlag 单按钮是否可点 Boolean
 * @handleAddToCart 购物车按钮点击事件处理函数 Function
 * @handleBuyNow 立即购买按钮点击事件处理函数 Function
 */

export default class SizeSelectModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      singleButtonVisible: false,
      multiButtonsVisible: false,
    }
  }
  componentDidMount(){
    this.setState({
      deHeight: document.documentElement.clientHeight,
      singleButtonVisible: this.props.singleButtonVisible,
      multiButtonsVisible: this.props.multiButtonsVisible
    })
  }
  render() {
    let data = this.props.data
    console.log(data)
    return （
      <div>
        <div
          className={`${stySizeSelectModal["mask"]}`}
          style={{ height: '100%' ,display: this.props.modalVisible? 'block':'none'}}
          onClick={this.props.handleClose}
        >
        </div>
        <div
          className={`${stySizeSelectModal["com-xmmodal-select-size"]} ${stySizeSelectModal[`${this.props.modalClass}`]}`}
        >
          <Flex className={stySizeSelectModal["modal-head"]} align="start">
            <div className={stySizeSelectModal["item-detail"]}>
              <Card
                title={data.header.title}
                content={data.header.content}
                imgUrl={data.header.imgUrl}
              />
            </div>
            <Close handleClick={this.props.handleClose} />
          </Flex>
          <div className={stySizeSelectModal["modal-content"]}>
            <ClickableTagsGroup
              title="型号"
              tagList={data.size.sizeList}
              handleCheck={this.props.sizeCheck}
              checkedItem={data.size.checkedSize}
            />
            <ClickableTagsGroup
              title="规格"
              tagList={data.type.typeList}
              handleCheck={this.props.typeCheck}
              checkedItem={data.type.checkedType}
            />
            <NumberSelect
              title="数量"
              defaultNum={this.props.defaultNum}
              onPlus={this.props.handlePlus}
              onMinus={this.props.handleMinus}
              selectedNum={this.props.selectedNum}
              onNumChange={this.props.handleNumChange}
              leftGoodsNum={data.num.leftGoodsNum}
              goodPrice={data.num.goodPrice}
            />
          </div>
          {
            this.props.singleButtonVisible ?
            <RecButton
              title="确认"
              clickFlag={this.props.confirmFlag}
              handleClick={this.props.handleConfirm}
            />
            : null
          }
          {
            this.props.multiButtonsVisible ?
            <ButtonsGroup
              titles={['加入购物车','立即购买']}
              buttonNum={2}
              handleBtnsClick={[this.props.handleAddToCart, this.props.handleBuyNow]}
            />
            : null
          }
        </div>
      </div>
    )
  }
}

```

上面的写法，弹窗组件继承父组件传过来的一大串方法，其实并不使用，只是传给自己的子组件而已，那么这个传递的代码就是冗余且丑陋的，如果改用复合的写法，以上的代码就变成了：

```jsx
// 以下代码直接写在页面中，不抽离单独的组件
// 最外层的弹窗容器组件 只负责展示，不做任何中间的传递作用
<Modal>
    <Flex className={stySizeSelectModal["modal-head"]} align="start">
      <div className={stySizeSelectModal["item-detail"]}>
        <Card
          title={data.header.title}
          content={data.header.content}
          imgUrl={data.header.imgUrl}
        />
      </div>
      <Close handleClick={this.handleClose} />
    </Flex>
    <div className={stySizeSelectModal["modal-content"]}>
      <ClickableTagsGroup
        title="型号"
        tagList={data.size.sizeList}
        handleCheck={this.sizeCheck}
        checkedItem={data.size.checkedSize}
      />
      <ClickableTagsGroup
        title="规格"
        tagList={data.type.typeList}
        handleCheck={this.typeCheck}
        checkedItem={data.type.checkedType}
      />
      <NumberSelect
        title="数量"
        defaultNum={this.defaultNum}
        onPlus={this.handlePlus}
        onMinus={this.handleMinus}
        selectedNum={this.selectedNum}
        onNumChange={this.handleNumChange}
        leftGoodsNum={data.num.leftGoodsNum}
        goodPrice={data.num.goodPrice}
      />
    </div>
    {
      this.props.singleButtonVisible ?
      <RecButton
        title="确认"
        clickFlag={this.confirmFlag}
        handleClick={this.handleConfirm}
      />
      : null
    }
    {
      this.multiButtonsVisible ?
      <ButtonsGroup
        titles={['加入购物车','立即购买']}
        buttonNum={2}
        handleBtnsClick={[this.handleAddToCart, this.handleBuyNow]}
      />
      : null
    }
</Modal>
```

这样就省去了一次愚蠢的属性传递过程。

没有组件继承能做到而组件复合做不到的事情，而且组件复合绝对比组件继承优雅的多。应该避免使用组件继承，在需要多级传递时，尽量使用context实现。