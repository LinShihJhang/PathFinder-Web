<template>
  <main style="background: #fff" class="pt-4 pb-7">
    <WrapContainer>
      <el-card class="search-card mb-3 text-center">
        <img src="@/assets/imgs/home/display-text.png" style="margin-top: -20px" />

        <h2 class="mb-3 text-grey">台灣打工換宿經驗分享平台</h2>

        <el-form :inline="true" size="large" style="margin-bottom: -24px">
          <el-form-item style="width: 100%; max-width: 400px">
            <el-input v-model="keyword" type="round" placeholder="搜尋換宿店家" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" tabindex="0" @click="searchWord(keyword)">搜尋</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </WrapContainer>
  </main>

  <section style="background: #f0f8f5" class="py-7">
    <WrapContainer>
      <h1 class="text-center mb-5">
        <font-awesome-icon :icon="['fas', 'store']" class="text-primary me-3" />精選換宿店家
      </h1>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="me-3 text-center" style="width: 100%">
            <div class="card-tag mb-4">
              <h5><font-awesome-icon :icon="['fas', 'star']" class="me-1" />評分最高</h5>
            </div>

            <h5 class="mb-1">
              <span class="me-2 text-accent">1</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>
            <h5 class="mb-1">
              <span class="me-2 text-accent">2</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>
            <h5 class="mb-4">
              <span class="me-2 text-accent">3</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>

            <img src="@/assets/imgs/home/comment.png" /> </el-card
        ></el-col>

        <el-col :span="8">
          <el-card class="me-3 text-center" style="width: 100%">
            <div class="card-tag mb-4">
              <h5><font-awesome-icon :icon="['fas', 'clock']" class="me-1" />工時最短</h5>
            </div>

            <h5 class="mb-1">
              <span class="me-2 text-accent">1</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>
            <h5 class="mb-1">
              <span class="me-2 text-accent">2</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>
            <h5 class="mb-4">
              <span class="me-2 text-accent">3</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>

            <img src="@/assets/imgs/home/lessHour.png" /> </el-card
        ></el-col>

        <el-col :span="8">
          <el-card class="me-3 text-center" style="width: 100%">
            <div class="card-tag mb-4">
              <h5><font-awesome-icon :icon="['fas', 'heart']" class="me-1" />福利最多</h5>
            </div>

            <h5 class="mb-1">
              <span class="me-2 text-accent">1</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>
            <h5 class="mb-1">
              <span class="me-2 text-accent">2</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>
            <h5 class="mb-4">
              <span class="me-2 text-accent">3</span>
              <span class="text-left" style="width: 200px">路易沙發咖啡館</span>
            </h5>

            <img src="@/assets/imgs/home/benefit.png" /> </el-card
        ></el-col>
      </el-row>
    </WrapContainer>
  </section>

  <section class="py-5">
    <WrapContainer>
      <h1 class="text-center mb-5">
        <font-awesome-icon :icon="['fas', 'comment-dots']" class="text-primary me-3" />最新評論
      </h1>

      <el-row :gutter="20">
        <el-col class="mb-2" :span="12">
          <el-card>
            <el-row :gutter="4" class="mb-2">
              <el-col :span="4">
                <img
                  src="@/assets/imgs/storeDefaultImg.png"
                  style="width: 64px; height: 64px"
                  class="rounded"
                />
              </el-col>

              <el-col :span="14">
                <h4 class="mb-1">Days In Taipei 台北日記青年旅館</h4>
                <p>Hedy • 2021-12-02</p>
              </el-col>

              <el-col :span="6" class="text-right">
                <div class="card-light-tag">
                  <h5><font-awesome-icon :icon="['fas', 'star']" class="me-1" />4.5 分</h5>
                </div>
              </el-col>
            </el-row>
            <p>
              如果此時我們選擇忽略打工換宿，那後果可想而知。不要先入為主覺得打工換宿很複雜，實際上，打工換宿可能比你想的還要更複雜。
            </p>
          </el-card>
        </el-col>

        <el-col class="mb-2" :span="12">
          <el-card>
            <el-row :gutter="4" class="mb-2">
              <el-col :span="4">
                <img
                  src="@/assets/imgs/storeDefaultImg.png"
                  style="width: 64px; height: 64px"
                  class="rounded"
                />
              </el-col>

              <el-col :span="14">
                <h4 class="mb-1">Days In Taipei 台北日記青年旅館</h4>
                <p>Hedy • 2021-12-02</p>
              </el-col>

              <el-col :span="6" class="text-right">
                <div class="card-light-tag">
                  <h5><font-awesome-icon :icon="['fas', 'star']" class="me-1" />4.5 分</h5>
                </div>
              </el-col>
            </el-row>
            <p>
              如果此時我們選擇忽略打工換宿，那後果可想而知。不要先入為主覺得打工換宿很複雜，實際上，打工換宿可能比你想的還要更複雜。
            </p>
          </el-card>
        </el-col>

        <el-col class="mb-2" :span="12">
          <el-card>
            <el-row :gutter="4" class="mb-2">
              <el-col :span="4">
                <img
                  src="@/assets/imgs/storeDefaultImg.png"
                  style="width: 64px; height: 64px"
                  class="rounded"
                />
              </el-col>

              <el-col :span="14">
                <h4 class="mb-1">Days In Taipei 台北日記青年旅館</h4>
                <p>Hedy • 2021-12-02</p>
              </el-col>

              <el-col :span="6" class="text-right">
                <div class="card-light-tag">
                  <h5><font-awesome-icon :icon="['fas', 'star']" class="me-1" />4.5 分</h5>
                </div>
              </el-col>
            </el-row>
            <p>
              如果此時我們選擇忽略打工換宿，那後果可想而知。不要先入為主覺得打工換宿很複雜，實際上，打工換宿可能比你想的還要更複雜。
            </p>
          </el-card>
        </el-col>

        <el-col class="mb-2" :span="12">
          <el-card>
            <el-row :gutter="4" class="mb-2">
              <el-col :span="4">
                <img
                  src="@/assets/imgs/storeDefaultImg.png"
                  style="width: 64px; height: 64px"
                  class="rounded"
                />
              </el-col>

              <el-col :span="14">
                <h4 class="mb-1">Days In Taipei 台北日記青年旅館</h4>
                <p>Hedy • 2021-12-02</p>
              </el-col>

              <el-col :span="6" class="text-right">
                <div class="card-light-tag">
                  <h5><font-awesome-icon :icon="['fas', 'star']" class="me-1" />4.5 分</h5>
                </div>
              </el-col>
            </el-row>
            <p>
              如果此時我們選擇忽略打工換宿，那後果可想而知。不要先入為主覺得打工換宿很複雜，實際上，打工換宿可能比你想的還要更複雜。
            </p>
          </el-card>
        </el-col>
      </el-row>
    </WrapContainer>
  </section>

  <section style="background: #f0f8f5" class="pt-7">
    <WrapContainer>
      <el-row class="align-center">
        <el-col :span="2"></el-col>
        <el-col :span="10">
          <img src="@/assets/imgs/home/share-bg.png" />
        </el-col>
        <el-col :span="10" class="text-center">
          <h1 class="mb-4">一起交流分享</h1>
          <el-button type="primary" size="large" @click="backSearch"
            ><font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
              class="me-1"
            />搜尋店家</el-button
          >
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </WrapContainer>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import WrapContainer from '../../global/WrapContainer.vue';

const keyword = ref();
const router = useRouter();
const searchWord = (word) => {
  if (keyword.value) {
    router.push({ name: 'searchStore', query: { keyword: word } });
  }
};

const backSearch = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style scoped>
.search-card {
  text-align: center;
  background-image: url('@/assets/imgs/home/display-bg.png');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  padding: 64px 0;
}

.card-tag {
  border-radius: 50px;
  padding: 8px 16px;
  text-align: center;
  color: white;
  background: #f48c2b;
  display: inline-block;
}

.card-light-tag {
  border-radius: 50px;
  padding: 8px 16px;
  text-align: center;
  color: #f48c2b;
  background: #fcf3e1;
  display: inline-block;
}
</style>
