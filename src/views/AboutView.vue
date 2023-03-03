<template>
  <div class="about-container">
    <div class="m-3 md:m-6 pt-10">
      <h2 class="about-title">CastAnArtとは</h2>
      <div class="about-paragraph">
        <p>
          CastAnArtは、マジック：ザ・ギャザリング(以下、マジック)のイラストをランダムに鑑賞できるファンコンテンツです。
        </p>
        <p>
          マジックは30年の歴史を持つ元祖トレーディングカードゲームであり、ゲーム性の高さはもちろん、深いストーリー性、そして美麗なアートでも多くのファンをひきつけています。
          世界中にマジックのプレイヤーがおり、競技シーンの頂点には賞金付きのトーナメントが開催されます。
        </p>
        <p>
          競技、そしてゲームとして強い魅力を持つマジックですが、前述の通りカードのイラストが美しいことでも有名です。
          同じカードでも複数の絵違いや枠違いが存在することもあり、コレクターにとっても人気があります。
        </p>
        <p>
          <span class="font-semibold">CastAnArt</span>では、そのようなマジックの美麗なイラストに焦点を当てて、人気のあるカードを中心にじっくりイラストを眺めることができます。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  height: 100vh;
  @apply bg-gradient-to-tr from-cyan-300 to-fuchsia-300;
}

.about-title {
  @apply text-2xl font-bold text-center;
}

.about-paragraph {
  @apply mx-auto mt-10 md:w-1/2;
}

.about-paragraph p {
  @apply my-5 text-sm lg:text-base;
}
</style>
