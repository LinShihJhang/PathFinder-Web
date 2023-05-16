<template>
  <WrapContainer>
    <el-row :gutter="20">
      <el-col :xs="24" :md="8">
        <el-card>
          <div class="d-flex align-center mb-2">
            <div class="me-2">
              <div v-if="store.imgUrl" class="rounded block">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="store.imgUrl"
                  fit="cover"
                  class="rounded"
                />
              </div>
              <img v-else src="../../../assets/imgs/storeDefaultImg.png" class="rounded" />
            </div>

            <div>
              <h3>{{ store.name }}</h3>
              <CommentRate :score="averageScore"></CommentRate>
            </div>
          </div>

          <div class="text-grey mb-2">
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="me-1" />{{ store.address }}
            </p>
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'phone']" class="me-1" />{{ store.tel }}
            </p>
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'clock']" class="me-1" />平均工時：
              {{ averageHours }}
            </p>
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'calendar-days']" class="me-1" />平均換宿日：
              {{ averageDays }}
            </p>
          </div>
          <el-button type="primary" style="display: block; margin: auto" size="large"
            >撰寫貼文</el-button
          >
        </el-card>
      </el-col>

      <el-col :xs="24" :md="16">
        <el-card v-for="comment in comments" :key="comment.id" class="mb-2">
          <div class="d-flex mb-2" style="justify-content: space-between">
            <div>
              <h4>{{ getUserName(comment.userId) }}</h4>
              <div class="text-grey">
                <p>{{ comment.createDate }}</p>
                <p>
                  <span class="mb-1 me-2">
                    <font-awesome-icon :icon="['fas', 'clock']" class="me-1" />平均工時：
                    {{ comment.workHours }}
                  </span>
                  <span class="me-2">·</span>
                  <span class="mb-1">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" class="me-1" />平均換宿日：
                    {{ comment.workDays }}
                  </span>
                </p>
              </div>
            </div>
            <div class="card-light-tag" style="align-self: flex-start">
              <h5 style="margin-bottom: 0px">
                <font-awesome-icon :icon="['fas', 'star']" class="me-1" />{{ comment.score }} 分
              </h5>
            </div>
          </div>

          <p class="mb-2">
            {{ comment.description }}
          </p>

          <span>
            <el-tag v-for="tag in comment.advantages" :key="tag" class="me-1" type="info">{{
              tag
            }}</el-tag>
            <el-tag v-for="tag in comment.disadvantages" :key="tag" class="me-1" type="info">{{
              tag
            }}</el-tag>
          </span>

          <div class="text-right text-grey">
            <span class="me-3">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" class="me-1" />{{
                comment.like.length > 0 ? comment.like.length : ' '
              }}</span
            >
            <span class="me-3">
              <font-awesome-icon :icon="['fas', 'thumbs-down']" class="me-1" />{{
                comment.dislike.length > 0 ? comment.dislike.length : ' '
              }}</span
            >
            <span class="me-3">
              <font-awesome-icon :icon="['fas', 'comment-dots']" class="me-1" />{{
                comment.replies.length > 0 ? comment.dislike.length : ' '
              }}</span
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
  </WrapContainer>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import WrapContainer from '../../global/WrapContainer.vue';
import CommentRate from '../../global/CommentRate.vue';

// common func & data
const route = useRoute();
const store = ref({});
const comments = ref([]);

// store info
const averageDays = ref('');
const averageHours = ref('');
const averageScore = ref('');

const getAverageInfo = (key) => {
  let total = 0;
  comments.value.forEach((comment) => {
    total += comment[key];
  });
  return total === 0 ? '-' : Math.floor(total / comments.value.length);
};

const getStore = () => {
  axios.get(`http://localhost:3000/stores/${route.params.id}?_embed=comments`).then((res) => {
    store.value = res.data;
    comments.value = store.value.comments;
    averageDays.value = ref(getAverageInfo('workDays'));
    averageHours.value = ref(getAverageInfo('workHours'));
    averageScore.value = ref(getAverageInfo('score'));
  });
};

// comment info
// user info
const users = ref([]);
const getUser = () => {
  axios.get('http://localhost:3000/users').then((res) => {
    users.value = res.data;
  });
};

// user name
const getUserName = computed(() => (userId) => {
  let userName = '';
  users.value.forEach((user) => {
    if (user.id === userId) {
      userName = user.name;
    }
  });
  return userName;
});

// init
const init = () => {
  getStore();
  getUser();
};

// onMounted
onMounted(() => {
  init();
});
</script>
