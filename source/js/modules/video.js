const video = () => {

  const fullVideo = () => {
    const videoWrap = document.querySelector(".video-big");
    const btn = document.querySelector(".smart__play-link");
    const video = videoWrap.querySelectorAll("video")[0];
    const videoClose = videoWrap.querySelector(".video-big__close");

    video.volume = 0.2;

    video.addEventListener("click", (e) => {
      e.preventDefault();
      if(video.paused) {
        video.play();
      } else if(video.played) {
        video.pause();
        console.log("pause");
      }
    })

    btn.addEventListener("click", () => {
      videoWrap.classList.add("video-big_active");

      if(video.paused) {
        video.play();
      }
    })



    //При клике на кнопку закрытия - скрываем его
    videoClose.addEventListener("click", () => {
      if(videoWrap.classList.contains("video-big_active")) {
        if(video.played) {
          video.pause();
        }

        videoWrap.classList.remove("video-big_active")
      }
    })

    //При клике вне модального окна - скрываем его
    videoWrap.addEventListener("click", (event) => {
      const clickedElementsTree = event.composedPath();

      if(clickedElementsTree.includes(video)) {
        return;
      } else {
        if(video.played) {
          video.pause();
        }

        videoWrap.classList.remove("video-big_active");
      }
    })
}

  const miniVideo = () => {
    const videoWrap = document.querySelector(".how-work__video");
    const preview = videoWrap.querySelector(".how-work__video-poster");
    const video = videoWrap.querySelector("video");

    preview.addEventListener("click", () => {
      videoWrap.classList.add("how-work__video_active");
      video.volume = 0.2;

      if(video.paused) {
        video.play();
      }
    })

    video.addEventListener("click", (e) => {
      e.preventDefault();
      if(video.paused) {
        video.play();
      } else if(video.played) {
        video.pause();
      }
    })

    //playPaused(video);
  }

  miniVideo();
  fullVideo();
}

export default video;