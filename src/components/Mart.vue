<template>
  <div id="wrap">
    <div id="line1" v-if="ok == true">
      <div class="item" id="apple">
        <img
          src="@/assets/img/apple.png"
          alt="1"
          title="@/assets/img/apple.png"
          @click="detailShow"
        />
        <p>Apple</p>
        <p>$3.65</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="banana">
        <img
          src="@/assets/img/banana.png"
          alt="2"
          title="@/assets/img/banana.png"
          @click="detailShow"
        />
        <p>Banana</p>
        <p>$7.99</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="cherries">
        <img
          src="@/assets/img/cherries.png"
          alt="3"
          title="@/assets/img/cherries.png"
          @click="detailShow"
        />
        <p>Cherries</p>
        <p>$2.93</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="lemon">
        <img
          src="@/assets/img/lemon.png"
          alt="4"
          title="@/assets/img/lemon.png"
          @click="detailShow"
        />
        <p>Lemon</p>
        <p>$1.2</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="mango">
        <img
          src="@/assets/img/mango.png"
          alt="5"
          title="@/assets/img/mango.png"
          @click="detailShow"
        />
        <p>Mango</p>
        <p>$10</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="tangerine">
        <img
          src="@/assets/img/tangerine.png"
          alt="6"
          title="@/assets/img/tangerine.png"
          @click="detailShow"
        />
        <p>Tangerine</p>
        <p>$4.79</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="watermelon">
        <img
          src="@/assets/img/watermelon.png"
          alt="7"
          title="@/assets/img/watermelon.png"
          @click="detailShow"
        />
        <p>Watermelon</p>
        <p>$4.79</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="strawberry">
        <img
          src="@/assets/img/strawberry.png"
          alt="8"
          title="@/assets/img/strawberry.png"
          @click="detailShow"
        />
        <p>Strawberry</p>
        <p>$2.4</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="avocado">
        <img
          src="@/assets/img/avocado.png"
          alt="9"
          title="@/assets/img/avocado.png"
          @click="detailShow"
        />
        <p>Avocado</p>
        <p>$5</p>
        <button @click="passData">Add To Cart</button>
      </div>
      <div class="item" id="pineapple">
        <img
          src="@/assets/img/pineapple.png"
          alt="10"
          title="@/assets/img/pineapple.png"
          @click="detailShow"
        />
        <p>Pineapple</p>
        <p>$15</p>
        <button @click="passData">Add To Cart</button>
      </div>
    </div>
    <div id="detail" v-if="ok == false">
      <div id="detailBox">
        <img :src="require(`@/assets/img/` + detilImg)" alt="" id="pImg" />
        <p id="pName">{{ detailName }}</p>
        <p id="pAlt">{{ detailAlt }}</p>
        <p id="pPrice">{{ detailPrice }}</p>
        <button @click="passData2">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      ok: true,
      detailImg: "",
      detailName: "",
      detailPrice: "",
      detailAlt: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    passData: function (e) {
      let prev = 0;
      // 부모노드
      const self = e.target.parentNode;

      let price = self.childNodes[2].textContent.split("$");
      // 합계
      let sum = 0;
      // 원래가격
      const chPrice = document.querySelector("#price");
      prev = chPrice.textContent.split("$");

      if (prev == 0) {
        console.log(prev);
        console.log(price);
        sum = Number(prev) + Number(price[1]);
        console.log(sum);
      } else {
        console.log(prev);
        console.log(price);
        sum = Number(prev[1]) + Number(price[1]);
        console.log(sum);
      }

      sum = sum.toFixed(2);

      // console.log(sum);
      chPrice.textContent = "$" + sum.toString();
    },
    passData2: function (e) {
      let prev = 0;
      // 부모노드
      const self = e.target.parentNode;
      let price = self.childNodes[3].textContent.split("$");
      // 합계
      let sum = 0;
      // 원래가격
      const chPrice = document.querySelector("#price");
      prev = chPrice.textContent.split("$");

      if (prev == 0) {
        console.log(prev);
        console.log(price);
        sum = Number(prev) + Number(price[1]);
        console.log(sum);
      } else {
        console.log(prev);
        console.log(price);
        sum = Number(prev[1]) + Number(price[1]);
        console.log(sum);
      }

      sum = sum.toFixed(2);
      // console.log(sum);
      chPrice.textContent = "$" + sum.toString();
    },
    detailShow: function (e) {
      const self = e.target.parentNode;
      // 버튼(Add to Cart)의 상위노드
      // 자식노드의 이미지 주소를 가져옴 (예, http://localhost8080/img/apple.5b54646.png)
      console.log(self.childNodes[0].src);
      // 자식노드 중에 바인딩된 파일명만 잘라서 가져옴 (예, apple.5b54646.png)
      this.detilImg = self.childNodes[0].src.split("/")[4];
      // 주소에서 바인딩값은 제거하고 이미지 파일명만 잘라 붙임 (예, apple.png)
      this.detilImg =
      this.detilImg.split(".")[0] + "." + this.detilImg.split(".")[2];
      // let src = self.childNodes[0].getAttribute('src');
      // console.log(src);
      // let src = '@/assets/img/pineapple.png';
      // this.detailImg = require(src);
      this.detailName = self.childNodes[1].textContent;
      this.detailPrice = self.childNodes[2].textContent;
      this.detailAlt = self.childNodes[0].alt;
      this.ok = false;
    },
  },
};
</script>

<style scoped>
#detailBox > button {
  background-color: rgb(255, 109, 41);
  color: white;
  width: 98%;
  font-size: 2vw;
  margin-bottom: 1rem;
}
#detail {
  background-color: white;
}
#pImg {
}
#pName {
  color: black;
}
#pPrice {
  color: black;
}
@media screen and (min-width: 1024px) {
  #wrap {
    background-color: gray;
    height: fit-content;
  }

  .item {
    background-color: white;
    width: 12vw;
    text-align: center;
    float: left;
    margin: 1vw;
    margin-left: 3vw;
    border-radius: 10px;
  }

  .item > img {
    width: 50%;
    padding-top: 0.5rem;
  }

  p {
    font-weight: bold;
    font-size: 2vw;
  }

  .item > button {
    width: 10vw;
    height: 4vw;
    background-color: rgb(255, 109, 41);
    border: none;
    color: white;
    font-size: 1.5vw;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  #line1 {
    width: fit-content;
    margin: 0 auto 5vw auto;
    padding-top: 6vw;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  #wrap {
    background-color: gray;
    height: fit-content;
  }

  .item {
    background-color: white;
    width: 15vw;
    text-align: center;
    float: left;
    margin: 1vw;
    margin-left: 3.5vw;
  }

  .item > img {
    width: 50%;
    padding-top: 0.5rem;
  }

  p {
    font-weight: bold;
    font-size: 1.8vw;
  }

  .item > button {
    width: 10vw;
    height: 4vw;
    background-color: rgb(255, 109, 41);
    border: none;
    color: white;
    font-size: 1.5vw;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  #line1 {
    width: fit-content;
    margin: 0 auto;
    padding-top: 6vw;
  }
}
@media screen and (max-width: 767px) {
  #wrap {
    background-color: gray;
    height: fit-content;
  }

  .item {
    background-color: white;
    width: 15vw;
    text-align: center;
    float: left;
    margin: 1vw;
    margin-left: 7vw;
  }

  .item > img {
    width: 50%;
    padding-top: 0.5rem;
  }

  p {
    font-weight: bold;
    font-size: 1.5vw;
  }

  .item > button {
    width: 10vw;
    background-color: rgb(255, 109, 41);
    border: none;
    color: white;
    font-size: 1.5vw;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  #line1 {
    width: fit-content;
    margin: 0 auto;
    padding-top: 6vw;
  }
  #line2 {
    width: fit-content;
    margin: 5vw auto 5vw auto;
  }
}

#line1:after {
  content: "";
  display: block;
  clear: both;
}
#line2:after {
  content: "";
  display: block;
  clear: both;
}
#wrap:after {
  content: "";
  display: block;
  clear: both;
}
</style>
