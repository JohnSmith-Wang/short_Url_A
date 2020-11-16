<template>
  <div class="fixed-top sticky-top">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark py-0">
      <div class="container">
        <span class="navbar-brand text-success py-0"><h4>FOOSESHOES</h4></span>
        <button class="navbar-toggler my-2" type="button" data-toggle="collapse" data-target=".navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse navbarCollapse">
          <ul class="navbar-nav mt-2 mt-md-0 ml-auto">
            <li class="py-2 px-3">
              <input class="form-control search-input mr-sm-2 col-10" type="text" placeholder="Search" aria-label="Search">
              <i type="button" class="fas fa-search text-light ml-2"></i>
            </li>
            <li class="btn-login btn btn-outline-secondary py-2 px-3">
              LOGIN or REGISTER
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <nav class="navbar navbar-expand-md navbar-light bg-light py-0">
      <div class="container">
        <div class="collapse navbar-collapse navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item py-2 px-3 tab-style rwd-tab-style">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item py-2 px-3 tab-style rwd-tab-style">
              <router-link to="/" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item py-2 px-3 tab-style rwd-tab-style">
              <router-link to="/" class="nav-link">About</router-link>
            </li>
            <li class="nav-item py-2 px-3 tab-style rwd-tab-style">
              <router-link to="/" class="nav-link">Pages</router-link>
            </li>
            <li class="nav-item py-2 px-3 tab-style rwd-tab-style">
              <router-link to="/" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item py-2 px-3 tab-style-end rwd-tab-style">
              <router-link to="/" class="nav-link">Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav mt-2 mt-md-0">
            <li class="nav-item py-2 px-3 tab-style rwd-tab-style">
              <a class="nav-link"><i class="far fa-star"></i><span class="bg-fav counter-style text-light ml-2">30</span></a>
            </li>
            <li class="nav-item py-2 px-3 tab-style-end rwd-tab-style">
              <a class="nav-link"><i class="fas fa-shopping-cart"></i><span class="bg-cart counter-style text-light ml-2">30</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>

</template>

<style lang="scss" scoped>
.btn-login{
  border-top: none;
  border-bottom:none ;
  border-radius: 0px;
  line-height: 35px;
}


.search-input{
  display: inline;
}

.tab-style{
  border-left: 1px solid #dfe0e2;
}
.tab-style-end{
  border-left: 1px solid #dfe0e2;
  border-right: 1px solid #dfe0e2;
}

.nav-item{
  .nav-link{
    color:#343a40
  }
}

.nav-item:hover{
  background-color:#a6a7a8;
  .nav-link{
    color:white
  }
  transition: .3s;
}

.counter-style{
  padding: 2px 4px;
  border-radius: 5px;
  font-size: 15px;
}

.bg-fav{
  background-color: #a6a7a8;
}

.bg-cart{
  background-color: #42d1ad;
}
/*RWD模式*/
@media only screen and (max-width:768px){
  .rwd-tab-style{
    border:none
  }
}
</style>

