<template>
  <div class="page">
    <div class="background">
      <table>
        <tr>
          <td>
            <div class="is-size-4">Image</div>
            <div class="content">
              <img class="image" src="https://m.media-amazon.com/images/I/81jmFrFrRIL._AC_SL1500_.jpg" />
            </div>
          </td>
          <td>
            <div class="is-size-4">Music Video</div>
            <div class="content">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mhyWBDxHTeg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              >
              </iframe>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <pre>
    All the way from Palm Springs, just out of detox
    Show him a warm welcome, let's give some applause

    Greetings all, hello
    Welcome to my show
    I'm sure you'll have fun
    Watching me juggle
    Eight balls at one time
    I'm no fucking mime
    I play practical jokes
    This squirting flower
    That wasn't flour
    That blew up your nose
    It's my special blend
    Of X, coke, and K
    You should be okay
    In several hours
            </pre>
          </td>
          <td>
            <pre>
He's got over sized shoes, and ill-fitting clothes
That is real blood dripping from his fake red nose

I'm Cokie the Clown
I will trip you down
Those 12 giant steps
I brought you all presents
Against good judgment
But being a good host
You all have been dosed
The kettle corn’s been laced
The fudge has been lined
You're having a great time
But you might not recall
From rohypnol
In the lemonade
Cokie homemade

He's the happiest clown
With the biggest frown
He's Cokie the Clown
            </pre>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page {
  background-image: url("https://m.media-amazon.com/images/I/81jmFrFrRIL._AC_SL1500_.jpg");
  background-size: cover;
}
.background {
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
}
table {
  width: 100%;
}
.is-size-4 {
  margin-left: 24px;
  margin-bottom: 12px;
}
.content {
  margin: 0 auto;
  display: grid;
  justify-content: center;
}
.image {
  width: 315px;
  height: 315px;
}
pre {
  background-color: rgba(255, 255, 255, 0);
}
</style>
