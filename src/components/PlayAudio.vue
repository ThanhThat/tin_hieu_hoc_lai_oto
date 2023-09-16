<template>
  <div class="container">
    <div class="row">
      <div class="col col-12 col-md-4 offset-md-4">
        <div class="card mt-5">
          <div class="card-body">
            <div class="mb-3">
              <base-btn class="btn-info w-100" @click="playAudio(1)">
                <audio src="/audio/KingKoong.wav" ref="audio1"></audio>
                <span>King Koong</span>
              </base-btn>
            </div>
            <div class="mb-3">
              <base-btn class="btn-info w-100" @click="playAudio(2)">
                <audio src="/audio/BEEP.wav" ref="audio2"></audio>
                <span>BEEP</span>
              </base-btn>
            </div>
            <div>
              <base-btn class="btn-info w-100" @click="playAudio(3)">
                <audio src="/audio/tinhieukhancap.wav" ref="audio3"></audio>
                <span>Tín Hiệu Khẩn Cấp</span>
              </base-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playAudio(buttonNumber) {
      for (let i = 1; i <= 3; i++) {
        if (i !== buttonNumber) {
          this.$refs[`audio${i}`].pause();
          this.$refs[`audio${i}`].currentTime = 0;
        }
      }

      // console.log(this.$refs[`audio${buttonNumber}`]);

      this.$refs[`audio${buttonNumber}`].play();
    },
  },
};
</script>

<style lang="scss" scoped></style>
