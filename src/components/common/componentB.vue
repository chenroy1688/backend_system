<template>
    <!-- back to top -->
    <div class="comA">
        <div class="comA-wrap">
            <div class="comA-content container" id="weatherBg">
                    <!-- search bar -->
                    <div class="search-box">
                        <input type="text" placeholder="Search...." class="search-bar" />
                    </div>
                    <!--  -->
                    <div class="weather-wrapper" v-if="weather.main">
                        <div class="location-box">
                            <div class="location">{{ weather.name }}</div>
                            <div class="date">Octorber 8th 2020</div>
                        </div>
                    </div>
                    <!-- weather info -->
                    <div class="weather-box">
                        <div class="temperature">26°C</div>
                        <div class="weather">Cloud</div>
                    </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
   data(){
       return{
            api_key:process.env.VUE_APP_WEATHER_KEY,
            base_url:'https://api.openweathermap.org/data/2.5/',
            query:'Taichung',
            weather:{},
            date:''
       }
   },
   created(){
       this.fetchWeather()
   },
   mounted(){

   },
   methods:{
        async fetchWeather(){
            const data = await fetch(`${this.base_url}weather?q=${this.query}&units=
            metric&APPID=${this.api_key}`)
            console.log(await data.json())

            this.weateher = await data.json()
        }
   }
}
</script>

<style>
/* ------------------------------
        goto top 
------------------------------ */
.container {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  )
}
#weatherBg{
    background-image: url('../../assets/image/cold-bg.jpg');
    background-size: contain;
    background-position: 50%;
    transition: 0.5s;
}
#weatherBg.warm {
  background-image: url('../../assets/image/warm-bg.jpg');
}
.location-box .location {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  /* text-shadow: 1px 3px rgba(0, 0, 0, 0.25); */
}
.location-box .date {
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
}
.weather-box .temperature {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.location,
.date,
.temperature,
.weather
{
    font-size:30px;
}
.search-bar{
    width:90%;
    margin:0 auto;
    padding:15px;
    transition: all .5s ease-in;
    border-radius: 0 16px 0 16px;
    border:none;
    outline: none;
    background: none;
    background-color: hsla(0,0%,100%,.5);
}
.search-bar:focus{
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 16px 0px 16px 0px;
}

.comA{
    border:1px solid #d4d4d4;
    padding:30px;
}
</style>