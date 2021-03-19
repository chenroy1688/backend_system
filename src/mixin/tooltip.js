//mixin01
export const data = {
  created(){
    this.conso()
  },
  data(){
      return{
          obs : '原始数据'
      }
  },
  methods:{
      conso(){
          this.obs = '更改后的数据'
        //   console.log('Mixin 后加入的数据')
      }
  }
}

//mixin02
export const toggless = {
    data(){
        return {
            isshow : false,
            isMsg: 'mixin数据 ---'
        }
    },
    methods: {
        toggleShow(){
            this.isshow = !this.isshow
        }
    }
}








