<template>
  <div>
    <play-audio></play-audio>

    <div class="container">
      <div class="row">
        <div class="col col-12 col-md-4 offset-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center">Bài Thi</h3>
              <base-btn
                class="btn-warning w-100 mb-3"
                ref="btnPractice"
                v-for="practice in audioPractices"
                :key="practice.id"
                @click="playAudioPractice(practice.id)"
                v-show="practice.show"
              >
                <audio :src="practice.src" ref="audio"></audio>
                <span>{{ practice.name }}</span>
              </base-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayAudio from "../components/PlayAudio.vue";
export default {
  name: "home",
  data() {
    return {
      audioPractices: [
        {
          id: 1,
          src: "/audio/batdau.wav",
          name: "Bắt đầu",
          show: true,
        },
        {
          id: 2,
          src: "/audio/bai_dibo.wav",
          name: "Dừng xe, người đi bộ",
          show: false,
        },
        {
          id: 3,
          src: "/audio/bai_dungxe_ngangdoc.wav",
          name: "Dừng xe ngang dốc",
          show: false,
        },
        {
          id: 4,
          src: "/audio/bai_vuonggoc.wav",
          name: "Qua vệt bánh xe, đường hẹp vuông góc",
          show: false,
        },
        {
          id: 5,
          src: "/audio/bai_ngatu.wav",
          name: "Ngã tư có tín hiệu điều khiển giao thông",
          show: false,
        },
        {
          id: 6,
          src: "/audio/bai_quanhco.wav",
          name: "Đường vòng quanh co",
          show: false,
        },
        {
          id: 7,
          src: "/audio/bai_ngatu.wav",
          name: "Ngã tư có tín hiệu điều khiển giao thông",
          show: false,
        },
        {
          id: 8,
          src: "/audio/bai_ghepdoc.wav",
          name: "Ghép xe dọc vào nơi đỗ",
          show: false,
        },

        {
          id: 9,
          src: "/audio/bai_ngatu.wav",
          name: "Ngã tư có tín hiệu điều khiển giao thông",
          show: false,
        },
        {
          id: 10,
          src: "/audio/bai_duongsat.wav",
          name: "Dừng xe nơi giao với đường sắt",
          show: false,
        },
        {
          id: 11,
          src: "/audio/bai_thaydoiso.wav",
          name: "Thay đổi số trên đường thẳng",
          show: false,
        },
        {
          id: 12,
          src: "/audio/bai_ghepngang.wav",
          name: "Ghép xe ngang",
          show: false,
        },
        {
          id: 13,
          src: "/audio/bai_ngatu.wav",
          name: "Ngã tư có tín hiệu điều khiển giao thông",
          show: false,
        },
        {
          id: 14,
          src: "/audio/kethuc.wav",
          name: "Kết thúc",
          show: false,
        },
      ],
    };
  },
  methods: {
    playAudioPractice(practiceId) {
      for (let i = 1; i <= this.audioPractices.length; i++) {
        this.$refs.btnPractice[practiceId - 1];
        if (i !== practiceId) {
          this.$refs.audio[i - 1].pause();
          this.$refs.audio[i - 1].currentTime = 0;
        }

        console.log(this.$refs.audio[practiceId - 1]);
        this.$refs.audio[practiceId - 1].play();

        const audioItem = this.audioPractices.find(
          (audioP) => audioP.id == practiceId
        );

        if (audioItem) audioItem.show = false;

        let nextAudio = this.audioPractices[practiceId];

        if (nextAudio) nextAudio.show = true;
        else {
          nextAudio = this.audioPractices[0];
          nextAudio.show = true;
        }
      }
    },
  },
  components: {
    PlayAudio,
  },
};
</script>

<style lang="scss" scoped></style>
