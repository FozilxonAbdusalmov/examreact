import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Carausell.css'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.jpg'
import img4 from './img/4.png'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




const imgData = [img1, img2, img3, img4, img5, img6]


function Carausell() {


    return (

        <>
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000} className='carausellll'>
                {
                    imgData.map((img, index) =>
                        <div className='slide' key={index}>
                            <img src={img} alt="Image1" />
                        </div>
                    )
                }
            </Carousel>

            <div className='swiper'>
                <>
                    <Swiper
                        slidesPerView={8}
                        spaceBetween={100}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper">
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=9b6d4f3f-9014-4ade-b4d2-4f0631beb048&k2=c9de4b57903405b17451e50987c193a9be8c7ed0913c7ac25a6aacbe2a45b2488c4fbc16784c893ad79f1933315b1ae46164e443d392e5318fc5087ea91846c1" alt="dhnm" />
                            <p>Smartfonlar va Telefonlar </p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=0f050cc9-dd07-4190-870c-684aa1b8bd9f&k2=f1657b6b8e3a8d7cef75568fd23398fa92ca280d2fc1874abaabd1fc4e912ef4342b3ffee2e291f35509c04b5a2c55e37c83b306a756426f0c816a1185a458d2" alt="dhnm" />
                            <p>Noutbuklar</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=632dd737-d01e-481d-92f5-4ad1b7fa40b7&k2=8f6a6df3c97ca8a78d9d920b4dae9799fc293f854943c1582203e2a0f64db28ca0c366eb543be8d5a8c6d3b367f4fad08d9bf5ddebc08d83419bcc3c75edfab4" alt="dhnm" />
                            <p>Televizorlar</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=5e3c756d-65b1-4cd2-93cb-2e32ac7b82ab&k2=8ba008aa1d8686c4dcad2f77dcb8dfa6687c034e0e7f919257a0f0319cadca4f24e21f531da1807b5bf9520a556ef1467aed2db39b4783555ea3facb22790989" alt="dhnm" />
                            <p>Soutgich</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=0b5ea418-85dd-415c-93dc-be227a24eff1&k2=c364b1e9339af8b6ec56c728f23d6c7a1771618c1f2671f150143cdef9ed987ff8afb6790e78fcebcc582a05455233db6298f6cadc9ec867fca9c576f6053dc4" alt="dhnm" />
                            <p>Isitgich</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://minio.alifnasiya.uz/shop/catalog/category/umnie-kolonki/1699010574-%D0%A3%D0%BC%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.png" alt="dhnm" />
                            <p>Aqilli Kalonka</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=685eeb63-4e18-4ec1-815c-af8538de2064&k2=56bdd76235b3592f03e944055de7ff779be5f14b3989574d8649562a0bb79ddaa5a0c30962d3bb12996b3adc147cfe168ae20cd061c81c5f4992e125ccc225d1" alt="dhnm" />
                            <p>Konditsionerlar</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=062e42f2-9a6b-444a-98c4-b413003de1d0&k2=28397dc4b641e26837f8711aca1f6ccb09b43a6715536372a03b4af619be5f7572e3d92cbfac952c0becf2a27e78a2ee96827d8fd51b3d29b8b69dc289594e2f" alt="dhnm" />
                            <p>Katta hajmli oshxona texnikasi</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=3b2b6da7-208f-4d6b-bc90-9851da86e702&k2=3aaa40f9dbd166783c4ae1b3a9686ce56aa27ce7870e90bc469d8ea4216e58593719bffc62eac1b7d1ab1bf550a934b0a867e673d154cce5867a3eaa68d24c64" alt="dhnm" />
                            <p>Aqilli Soat</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=cc86390c-7f23-420d-b7f6-6001d14a7fdb&k2=b5f9a834f90f43eb4885fecff93717a62b6e9e6c0316d59f793b64dd3e78eb3a3ed637476bf93557000e546c7aa65cb3ef88d59d812685c9634ed4c858fa8dca" alt="dhnm" />
                            <p>Tugmali Telefonlar</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=c829b09f-1827-4785-9202-e856359c08a2&k2=511283d68df648366f0aac838fd1525e6fc0066cd668fb28bb252f2b07f6606c5f180a67325dedbbac1a0aa0d2f1f65259484a238e82a8dc2883a429be471a61" alt="dhnm" />
                            <p>Changyutkich</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=fa54e395-a717-41cb-b0b4-0d9e4605d8c3&k2=e8cce8b1a2d37c629aca806c75864735ba7784e2795a6310f70510100b87130b2bb6ce5af0ea5a100cd33d8183d62edeed635afecea1d8be509945e148f7f9b5" alt="dhnm" />
                            <p>Simsiz Quloqchinlar</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=862a715f-619e-43fb-8534-21aac8ca82b9&k2=7479dac5615e8b0821b3de556e0ecf6e5400910d0ca9cb8eaf28d10e95b3dc9bc451d22bb66818829fb6614506ba8d4d2f29f0e94ec935e7d2f6f916a201ddd1" alt="dhnm" />
                            <p>Radar Dektorlar</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=2e4034f5-bffb-4c5c-9d3b-18e191c1f83f&k2=458cfc636736663d4aeb0d3af6f957fa28e9d180a22119e847ebbf49d657fed47df0f90fdcea08a309bbe47d0a8291a43588d0bb173f274106a3ff4adabd9549" alt="dhnm" />
                            <p>Mikro tulqinli Pechlar</p>
                        </SwiperSlide>
                        <SwiperSlide className='carausel_imgs'>
                            <img src="https://storage2.alifshop.uz/files?k1=804499f9-004d-4e97-8d4e-86edda57f313&k2=c18f8934ce515f3f822b87e8d29f4cdeac3bf25136020bd2f414ad1506dd168710ce6e922a660002e1f7bea7afc7db85e09cd98e94f7d282a7d00e182b622164" alt="dhnm" />
                            <p>Portativ KAlonkalar</p>
                        </SwiperSlide>

                    </Swiper>
                </>

            </div>
        </>
    );

}

export default Carausell
