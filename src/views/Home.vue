<template>
  <div class="container">
    <div>
      <input id="user-url" class="form-control" v-model="url" placeholder="請輸入網址">
      <button type="button" class="btn btn-info" @click="makeUrl">進行縮網址</button>
    </div>

    <div class="m-4">
      這是您的縮網址 {{shortUrl}}
    </div>

    <div class="m-4">
      <h1>自訂義縮網址</h1>
      <p>當前選擇的縮網址:{{selUrl}}</p>
      <input id="user-edit" class="form-control" v-model="newUrl" placeholder="請輸入欲更改的網址">
      <p><button class="btn btn-danger" @click="editUrl">更改</button></p>
      <p>這是您更改後的新網址{{completeEdit}}</p>
    </div>

    <div class="m-4">
      <h1>縮網址歷史紀錄</h1>
      <div v-for="(item,index) in urlHistory" :key="index">
        <div class="bg-info text-light">
          <p>原網址: {{item.OrignalUrl}}</p>
          <p>新網址: {{item.ShorUrl}}</p>
          <p><button class="btn btn-warning" @click="targetUrl(item)">更改縮網址字符</button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      url:'',
      shortUrl:'',
      newUrl:'',
      selUrl:'',
      completeEdit:'',
      urlHistory:[]
    }
  },
  methods:{
    makeUrl(){
      const api = 'https://api.pics.ee/v1/links?access_token=20f07f91f3303b2f66ab6f61698d977d69b83d64&caller=client-simple&lang=zh-tw'
      this.$http.post(api,{url:this.url}).then((response)=>{
        if(response.status === 200){
          let urlRecord
          this.shortUrl = response.data.data.picseeUrl

          urlRecord = {
            OrignalUrl:this.url,
            ShorUrl: this.shortUrl
          }

          this.urlHistory.push(urlRecord)

          this.url = ""
        }
        else{
          alert('處理錯誤!!!')
        }
      })
    },
    targetUrl(data){
      this.selUrl = data.ShorUrl.substr(25,6)
    },
    editUrl(){
      let old = this.selUrl
      let edit = this.newUrl
      const api = `https://api.pics.ee/v1/links/${old}/encodeId/?access_token=20f07f91f3303b2f66ab6f61698d977d69b83d64&caller=client-simple&lang=zh-tw`


      this.$http.post(api,{value:edit}).then((response)=>{
        if(response.status === 200){
          alert('更改成功!')
          this.completeEdit = "https://user22695.pse.is/" + edit;
          this.newUrl = "";
        }
        else(
          alert('處理錯誤!!!')
        )
      })
    }
  }
}
</script>