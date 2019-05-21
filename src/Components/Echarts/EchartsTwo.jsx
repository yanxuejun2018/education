import React, { Component } from "react";
import echarts from "echarts";
import { connect } from "react-redux";
export class EchartsTwo extends Component {
  render() {
    return <div id="main2" style={{ height: 400 }} />;
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    let order_counter = nextProps.order_counter;

    if (order_counter != undefined) {
      let left_data = Object.keys(order_counter);
      let total_data = [];
      for (let i = 0; i < left_data.length; i++) {
        let obj = {};
        obj.name = left_data[i];
        obj.value = order_counter[left_data[i]];
        total_data.push(obj);
      }
      let main2 = echarts.init(document.getElementById("main2"));
      let option2 = {
        title: {
          text: "付费订单统计",
          subtext: "最近30天",
          x: "right",
          y: "bottom"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br />{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
            data: left_data
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: false,
        series: (function() {
          let series = [];
          for (let i = 0; i < 30; i++) {
            series.push({
              name: "付费订单统计",
              type: "pie",
              itemStyle: {
                normal: {
                  label: { show: i > 28 },
                  labelLine: { show: i > 28, length: 20 }
                }
              },
              radius: [i * 4 + 40, i * 4 + 43],
                data: total_data
            });
          }
          series[0].markPoint = {
            symbol: "emptyCircle",
            symbolSize: series[0].radius[0],
            effect: {
              show: true,
              scaleSize: 12,
              color: "rgba(250,225,50,0.8)",
              shadowBlur: 10,
              period: 30
            },
            data: [{ x: "50%", y: "50%" }]
          };
          return series;
        })()
      };
      main2.setOption(option2);
    }
  }
  componentDidMount() {}
}
const mapStateToProps = state => {
  return {
    order_counter: state.homeData.order_counter
  };
};

export default connect(
  mapStateToProps,
  null
)(EchartsTwo);

{
  /* <script>
    $(function() {
        let main1 = echarts.init(document.getElementById("main1"));
        let option = {
        title: {
        text: "订单统计"
},
          tooltip: {},
          legend: {
        data: ["购买数量"]
},
          xAxis: {
        data: ["饮品", "服装", "箱包", "生活用品", "家居", "电器"]
},
          yAxis: {},
series: [
            {
        name: "销量",
type: "bar",
data: [45, 10, 26, 29, 23, 33]
}
]
};
main1.setOption(option);

let main2 = echarts.init(document.getElementById("main2"));
        let option2 = {
        title: {
        text: "付费订单统计",
subtext: "最近30天",
x: "right",
y: "bottom"
},
          tooltip: {
        trigger: "item",
            formatter: "{a} <br />{b} : {c} ({d}%)"
},
          legend: {
        orient: "vertical",
x: "left",
data: ["Chrome", "Firefox", "Safari", "IE9+", "IE8-"]
},
          toolbox: {
        show: true,
            feature: {
        mark: {show: true },
              dataView: {show: true, readOnly: false },
              restore: {show: true },
              saveAsImage: {show: true }
}
},
calculable: false,
          series: (function() {
        let series = [];
            for (let i = 0; i < 30; i++) {
        series.push({
            name: "付费订单统计",
            type: "pie",
            itemStyle: {
                normal: {
                    label: { show: i > 28 },
                    labelLine: { show: i > 28, length: 20 }
                }
            },
            radius: [i * 4 + 40, i * 4 + 43],
            data: [
                { value: i * 128 + 80, name: "饮品" },
                { value: i * 64 + 160, name: "服装" },
                { value: i * 32 + 320, name: "箱包" },
                { value: i * 16 + 640, name: "生活用品" },
                { value: i * 8 + 1280, name: "家居" }
            ]
        });
    }
            series[0].markPoint = {
        symbol: "emptyCircle",
symbolSize: series[0].radius[0],
              effect: {
        show: true,
scaleSize: 12,
color: "rgba(250,225,50,0.8)",
shadowBlur: 10,
period: 30
},
              data: [{x: "50%", y: "50%" }]
};
return series;
})()
};
main2.setOption(option2);
});
    </script> */
}
