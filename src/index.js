import $ from 'jQuery';
import './css/1.css'
import './css/1.less'
// import './css/1.scss'
// 导入 vue单文件组件
import App from './components/App.vue'
import Vue from 'vue'

$(function() {
    $('li:odd').css('backgroundColor', 'red');
    $('li:even').css('backgroundColor', 'lightblue');
    // console.log('end');
})

class Person {
    static info = 'aaa'
}
console.log(Person.info);

const vm = new Vue({
    el: "#app",
    //通过render 方法，把指定的组件渲染到el 区域中
    render: h => h(App)
})