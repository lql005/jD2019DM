<template>
    <Panel title="理财金选" :cname="$style.cname">
        <div :class="$style.money">
            <dl v-for="item in items" :key="item.title">
                <dt><span>{{ item.title }}</span><span>{{item.sub}}</span></dt>
                <dd>{{ item.num}}</dd>
                <dd>{{ item.text}}</dd>
            </dl>           
        </div>
    </Panel>
</template>

<script>
import Panel from "../../components/panel";
export default {
    data() {
        return {
            cname:"cname",
            items:[{
                title:"定期理财首选",
                sub: "天天赚钱",
                num: "5.60%",
                text: "历史年化回报率",
            },{
                title: "小白理财首选",
                sub: "天天赚钱",
                num: "5.60%",
                text: "历史年化回报率",
            },{
                title: "月月盈利养老保障",
                sub: "天天赚钱",
                num: "5.60%",
                text: "历史年化回报率",
            },{
                title: "小白基金天天赚",
                sub: "天天赚钱",
                num: "5.60%",
                text: "历史年化回报率",
            }]
        }
    },
    components:{
        Panel,
    }
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
    .cname {
        @include panel;
        .money {
            @include list(row);
            box-sizing: border-box;
            &::after {
                content: " ";
                display: block;
                width: 100%;
                height: 1px;
                box-sizing: border-box;
                background-color: #ccc;
                position: relative;
                top: -1.95rem;
            }
            dl {
                box-sizing: border-box;
                padding:.2rem .24rem;
                width: 50%;
                position: relative;
                margin-bottom: .2rem;
                &::after {
                    content: "";
                    width: 1px;
                    height: 1.36rem;
                    background-color: #ccc;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    margin-top:-(.68rem);
                    display: block;
                }
                &:nth-child(2n) {
                    &::after{
                        display: none;
                    }                   
                }
                dt {
                    font-size: .3rem;
                    font-weight: 700;
                    position: relative;
                    span {
                        &:first-child {
                            display: inline-block;
                            width: 60%;
                            height: .3rem;
                            line-height: .3rem;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        &:last-child {
                            display: inline-block;
                            position: absolute;
                            height: .3rem;
                            font-size: .2rem;
                            color:red;
                            border: 1px solid red;
                            text-align: center;
                            line-height: .3rem;
                            padding: 0 .1rem;
                        }           
                    }
                }
                dd {
                    &:nth-child(2) {
                        font-size: .28rem;
                        font-weight: 700;
                        color: red;
                    }
                }
            }
        }
    }
</style>

