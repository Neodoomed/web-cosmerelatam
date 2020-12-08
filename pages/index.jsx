import MainConteiner from './../components/main';
import BannerHome from './../components/home/bannerHome';
import GoTop from '../components/goTop';

export default function Index() {
  return (
    <MainConteiner>
      <BannerHome></BannerHome>
      <GoTop/>
    </MainConteiner>
  );
}
