import React from 'react';

import Img from '../../components/Img';
import {
  BriefcaseIcon,
  CogIcon,
  HeartIcon,
  LiquidIcon,
  StarSolidIcon,
  UsersIcon,
} from '../../components/Svg';
import Button from '../../components/Button';

import './styles/CarInfos.scss';

const CarInfos = () => {
  return (
    <div className="CarInfos">
      <div className="infos">
        <div className="base-infos">
          <div className="name">VINFAST FADIL 2019</div>
          <div className="car-info">
            <div className="block-info">
              <StarSolidIcon className="star-icon icon" />
              <span>5.0</span>
            </div>
            <div className="block-info">
              <BriefcaseIcon className="icon" />
              <span>194 chuyến</span>
            </div>
          </div>
        </div>
        <Button variant="outline" className="like-btn">
          <HeartIcon />
        </Button>
      </div>
      <div className="main-infos">
        <div className="main-info">
          <UsersIcon />
          <div className="t-value">
            <div className="title">Số ghế</div>
            <div className="value">5 chỗ</div>
          </div>
        </div>
        <div className="main-info">
          <CogIcon />
          <div className="t-value">
            <div className="title">Truyền động</div>
            <div className="value">Số tự động</div>
          </div>
        </div>
        <div className="main-info">
          <LiquidIcon />
          <div className="t-value">
            <div className="title">Nhiên liệu</div>
            <div className="value">Xăng</div>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="title">Mô tả</div>
        <div className="value">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          dolor aperiam vel non veniam exercitationem a explicabo ut soluta
          aspernatur omnis ipsa nam odit tempore dicta deleniti dolore, aliquid
          id! Accusantium, recusandae repellendus. Obcaecati ratione eius quam
          veniam quisquam facilis fuga labore? Eaque, quae est! Amet doloribus
          culpa omnis illo, blanditiis in nisi ratione officiis dicta eligendi.
          Dolorem, quos magni. Quaerat, amet quia! Quos delectus nihil est
          explicabo consectetur voluptate aperiam molestiae labore fuga
          distinctio amet fugiat perspiciatis illum dolor, sed nobis dolore
          consequuntur non minus quo porro optio? Vitae. Quasi corrupti fugiat
          hic porro, quos, eveniet rem itaque adipisci facilis veniam quaerat
          voluptas voluptatibus officia excepturi eum soluta quisquam, earum
          voluptatem non. A aperiam ratione eum, temporibus explicabo et!
          Voluptates vitae nam unde. Ullam, odit. At tempore consequuntur
          voluptatum quidem ut aperiam qui doloremque. Rem ipsum minus ad
          doloremque earum architecto ratione facere animi, modi repudiandae,
          veniam hic temporibus? Mollitia obcaecati dolorem odio facere nisi
          cumque. Hic placeat excepturi cumque, corporis provident eos dolor
          asperiores ipsam expedita sed nihil quibusdam dolores nam rerum animi
          error molestias beatae, tempora tempore? Temporibus officiis, vel
          repellendus accusantium asperiores, ipsa pariatur aut voluptatum ullam
          unde enim molestiae optio incidunt quis vitae, repellat nisi iste
          quibusdam natus? Incidunt eveniet nisi ut odio quod totam! At culpa
          recusandae temporibus laboriosam ex libero architecto, modi placeat
          voluptatum dolore, aut sit cum explicabo possimus quae, consectetur
          magni eligendi iure autem vel beatae perferendis cumque quidem sed.
          Consequuntur! Eaque voluptatibus, provident ratione quaerat fuga nulla
          possimus vitae neque ipsum dicta autem. Voluptas enim architecto ea
          commodi soluta aperiam officia ullam? Aut quam eveniet alias unde
          veritatis cumque dolore? Ipsa aperiam dignissimos itaque assumenda.
          Enim nostrum, soluta inventore aliquam dolores magnam odio, eos
          praesentium at neque cumque, minima dolorum atque. Rem voluptatibus,
          et ipsa pariatur distinctio necessitatibus ad! Omnis.
        </div>
      </div>
      <div className="term">
        <div className="title">Điều khoản</div>
        <div className="value">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          dolor aperiam vel non veniam exercitationem a explicabo ut soluta
          aspernatur omnis ipsa nam odit tempore dicta deleniti dolore, aliquid
          id! Accusantium, recusandae repellendus. Obcaecati ratione eius quam
          veniam quisquam facilis fuga labore? Eaque, quae est! Amet doloribus
          culpa omnis illo, blanditiis in nisi ratione officiis dicta eligendi.
          Dolorem, quos magni. Quaerat, amet quia! Quos delectus nihil est
          explicabo consectetur voluptate aperiam molestiae labore fuga
          distinctio amet fugiat perspiciatis illum dolor, sed nobis dolore
          consequuntur non minus quo porro optio? Vitae. Quasi corrupti fugiat
          hic porro, quos, eveniet rem itaque adipisci facilis veniam quaerat
          voluptas voluptatibus officia excepturi eum soluta quisquam, earum
          voluptatem non. A aperiam ratione eum, temporibus explicabo et!
          Voluptates vitae nam unde. Ullam, odit. At tempore consequuntur
          voluptatum quidem ut aperiam qui doloremque. Rem ipsum minus ad
          doloremque earum architecto ratione facere animi, modi repudiandae,
          veniam hic temporibus? Mollitia obcaecati dolorem odio facere nisi
          cumque. Hic placeat excepturi cumque, corporis provident eos dolor
          asperiores ipsam expedita sed nihil quibusdam dolores nam rerum animi
          error molestias beatae, tempora tempore? Temporibus officiis, vel
          repellendus accusantium asperiores, ipsa pariatur aut voluptatum ullam
          unde enim molestiae optio incidunt quis vitae, repellat nisi iste
          quibusdam natus? Incidunt eveniet nisi ut odio quod totam! At culpa
          recusandae temporibus laboriosam ex libero architecto, modi placeat
          voluptatum dolore, aut sit cum explicabo possimus quae, consectetur
          magni eligendi iure autem vel beatae perferendis cumque quidem sed.
          Consequuntur! Eaque voluptatibus, provident ratione quaerat fuga nulla
          possimus vitae neque ipsum dicta autem. Voluptas enim architecto ea
          commodi soluta aperiam officia ullam? Aut quam eveniet alias unde
          veritatis cumque dolore? Ipsa aperiam dignissimos itaque assumenda.
          Enim nostrum, soluta inventore aliquam dolores magnam odio, eos
          praesentium at neque cumque, minima dolorum atque. Rem voluptatibus,
          et ipsa pariatur distinctio necessitatibus ad! Omnis.
        </div>
      </div>
    </div>
  );
};

export default CarInfos;
