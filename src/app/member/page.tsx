import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHead from "@/components/pagehead";
import Member from "@/components/member";

export default function MemberPage() {
  return (
    <div className="min-h-screen bg-white"> 
     <Header />
     <PageHead 
      RImageSrc="/Rnarrow.svg"
      LImageSrc="/Lnarrow.svg"
      title="サークル所属メンバー"
      subtitle="Member"
     />
     <Member
      imageSrc="/members/oliveoiler.png"
      name="oliveoiler"
      role="代表 / トラックメーカー / デザイナー / B3"
      comment="現在サークル代表を務めているoliveoilerです。EDM全般が好きで、HouseからDubstep、Jersey clubなど色々作っています。使用しているDAWはAbleton Liveです。最近はゼンレスゾーンゼロとエンドフィールドに脳を焼かれています。"
      FavGenre="Bass House、complextro、Hitech、Hyperpopなど"
      xUrl="https://twitter.com/oliveoiler2"
      soundcloudUrl="https://soundcloud.com/user-896075660"
     />
      <Member
        imageSrc="/members/onnenai.jpg"
        name="Onnenai"
        role="副代表 / トラックメーカー / エンジニア / B3"
        comment="副代表です。Kawaii Future Bassから電子音楽にハマり、Futureなジャンルの音楽を中心に制作しています。DJサークルでDJもしています。合成音声も好きで初音ミクを中心に複数の音声ライブラリを揃えています。今年はたくさん使ってあげたいです。"
        FavGenre="Kawaii Future Bass, Electro Pop, Vocaloid Electro, Botanicaなど"
        xUrl="https://twitter.com/onnenai_w57"
        soundcloudUrl="https://soundcloud.com/onnenaiw57"
      />
      <Member 
        imageSrc="/members/oruto.webp"
        name="OrutO"
        role="トラックメーカー / 教育大B4"
        comment="かなり未来大に染まった教育大生です。メインジャンルはdubstep(Tearoutやriddim)、Chillです(勝利の女神:NIKEEのBGMからdubstepにハマりました)。ボカロＰとしても活動しています。"
        FavGenre="dubstep、riddim、trench、tearout、lofi"
        xUrl="https://twitter.com/oruto_key"
        soundcloudUrl="https://on.soundcloud.com/gf63EMjpMY2joxvvYx"
      />
      <Footer />
    </div>
  );
}