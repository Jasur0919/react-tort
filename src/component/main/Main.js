import React from 'react'
import './Main.css'
import Camyon from '../../assent/images/home-fura.svg'
import Logo1 from '../../assent/images/logo-1.svg'
import Logo2 from '../../assent/images/logo-2.svg'
import Logo3 from '../../assent/images/logo-3.svg'
import Tir1 from '../../assent/images/tir-1.svg'
import Tir2 from '../../assent/images/tir-2.svg'
import Tir3 from '../../assent/images/tir-3.svg'
import Master1 from '../../assent/images/master-1.svg'
import Master2 from '../../assent/images/master-2.svg'
import Master3 from '../../assent/images/master-3.svg'
import Site1 from '../../assent/images/site-1.svg'
import Site2 from '../../assent/images/site-2.svg'
import Site3 from '../../assent/images/site-3.svg'
import Site4 from '../../assent/images/site-4.svg'
import Site5 from '../../assent/images/site-5.svg'
import Site6 from '../../assent/images/site-6.svg'
import Site7 from '../../assent/images/site-7.svg'
import Site8 from '../../assent/images/site-8.svg'
import Row from '../../assent/images/row-man.svg'
import Instagram from '../../assent/images/instg-man.svg'
import Wercel from '../../assent/images/w-man.png'
import In from '../../assent/images/in-man.svg'
import Man1 from '../../assent/images/man-1.svg'
import Man2 from '../../assent/images/man-2.svg'
import Man3 from '../../assent/images/man-3.svg'
import Man4 from '../../assent/images/man-4.svg'
import Man5 from '../../assent/images/man-5.svg'
import Man6 from '../../assent/images/man-6.svg'
import Inter from '../../assent/images/inter-1.svg'



const Logo = [
    {
        id: 1,
        image: Logo1,
        title: "Поиск производителей по товару",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut."
    }, 
    {
        id:2,
        image: Logo2,
        title: "Поиск конкретного производителя",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut."
    }, 
    {
        id: 3,
        image: Logo3,
        title: "Доставка образцов товаров",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut."
    } 
]

const Tir = [
    {
        id: 1,
        image: Tir1,
        title: "Станки и оборудование",
        text: "Lorem ipsum dolor sit amet, consectetur            adipiscing  elit, sed do eiusmod ut.",
        price: "20 000 руб."
    },
    {
        id: 1,
        image: Tir2,
        title: "Станки и оборудование",
        text: "Lorem ipsum dolor sit amet, consectetur            adipiscing  elit, sed do eiusmod ut.",
        price: "20 000 руб."
    },
    {
        id: 1,
        image: Tir3,
        title: "Станки и оборудование",
        text: "Lorem ipsum dolor sit amet, consectetur            adipiscing  elit, sed do eiusmod ut.",
        price: "20 000 руб."
    }
]

const Master = [
    {
        id: 1,
        image: Master1,
        title: "Предложение от продавца",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
    {
        id: 2,
        image: Master2,
        title: "Доставка",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in.  ",
    },
    {
        id: 3,
        image: Master3,
        title: "Установка у клиента",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    }
]

const Site = [
    {
        id: 1,
        image: Site1,
        title: "Росатом",
        text: "Корпорация атомной энергии"
    },
    {
        id: 2,
        image: Site2,
        title: "Газпром",
        text: "Энергетическая компания"
    },
    {
        id: 3,
        image: Site3,
        title: "Роснефть",
        text: "Нефтегазовая компания"
    },
    {
        id: 4,
        image: Site4,
        title: "Роскосмос",
        text: "Корпорация в космической отрасли"
    },
    {
        id: 5,
        image: Site5,
        title: "Лукойл",
        text: "Нефтяная компания"
    },
    {
        id: 6,
        image: Site6,
        title: "Интер РАО",
        text: "Энергетическая компания"
    },
    {
        id: 7,
        image: Site7,
        title: "Ростех",
        text: "Промышленная корпорация"
    },
    {
        id: 8,
        image: Site8,
        title: "Банк ВТБ",
        text: "Коммерческий банк"
    }
]

const Man = [
    {
        id: 1,
        image: Man1,
        name: "Антон Макаров",
        title: "Руководитель компании"
    },
    {
        id: 2,
        image: Man4,
        name: "Елена Валерьева",
        title: "Главный бухгалтер"
    },
    {
        id: 3,
        image: Man2,
        name: "Иван Аркадьев ",
        title: "Менеджер по закупкам"
    },
    {
        id: 4,
        image: Man5,
        name: "Борис Вавилов",
        title: "Бухгалтер"
    },
    {
        id: 5,
        image: Man3,
        name: "Алина Кравец",
        title: "Сотрудник отдела кадров"
    },
    {
        id: 6,
        image: Man6,
        name: "Виктор Козуб",
        title: "Менеджер по закупкам"
    }
]



const Main = () => {

    let logoItem = Logo?.map((el) => (
        <div key={el.id} className="logo_card">
            <img key={el.image} src={el.image} alt="" />
            <h3>{el.title}</h3>
            <p>{el.text}</p>

        </div>
    ))

    let tirItem = Tir?.map((el) => (
        <div key={el.id} className='tir_crad'>
            <img key={el.image} src={el.image} alt="" />
            <div className='tir_card_child'>
            <h3>{el.title}</h3>
            <p>{el.text}</p>
            <h4>{el.price}</h4>
            </div>
        </div>
    ))

    let masterItem = Master?.map((el) => (
        <div key={el.id} className='master_card'>
            <img key={el.image} src={el.image} alt="" />
            <div className='master_card_text'>
                <h3>{el.title}</h3>
                <div className='master_row'></div>
                <p>{el.text}</p>
            </div>
        </div>
    ))

    let siteItem = Site?.map((el) => (
        <div key={el.id} className='site_card'>
            <img key={el.image} src={el.image} alt="" />
            <h3>{el.title}</h3>
            <p>{el.text}</p>

        </div>
    ))

    let manItem = Man?.map((el) => (
        <div key={el} className='man_card'>
             <div className="man_color"></div>
             <img key={el.image} src={el.image} alt="" />
             <div className="man_text">
                <h3>{el.name}</h3>
                <img src={Row} alt="" />
                <p>{el.title}</p>
                <div className="man_text_img">
                                <img src={Instagram} alt="" />
                                <img src={Wercel} alt="" />
                                <img src={In} alt="" />
                            </div>
             </div>
        </div>
    ))

  return (
    <main>
        <section className="home">
            <div className="container">
                <div className="home_box">
                    <div className="home_text">
                        <h1>Поставщик Дальнего Востока</h1>
                        <p>
                        Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.
                        </p>
                        <h4>Узнать больше</h4>
                    </div>
                    <img src={Camyon} alt="" />
                </div>
            </div>
        </section>

        <section className="logo">
            <div className="container">
                <div className="logo_box">
                    {logoItem}
                    <div className="logo_card">
                        
                        {/* <img src={Logo1} alt="" />
                        <h3>Поиск производителей по товару</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.</p> */}
                    </div>
                    {/* <div className="logo_card">
                        <img src={Logo1} alt="" />
                        <h3>Поиск производителей по товару</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.</p>
                    </div>
                    <div className="logo_card">
                        <img src={Logo1} alt="" />
                        <h3>Поиск производителей по товару</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.</p>
                    </div> */}
                </div>
            </div>
        </section>

        <section className="tir">
            <div className="container">
                <div className="tir_box">
                    <h1>Выполненные работы</h1>
                    <p>Мы собрали информацию по грузам, которые мы уже доставили.У нас специальный подход к каждому виду товаров.  </p>

                    </div>
                    <div className="tir_cards">

                        {tirItem}
                        {/* <div className="tir_card">
                            <img src={Tir1} alt="" />
                            <div className="tir_card_child">
                            <h3>Станки и оборудование</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.</p>
                            <h4>20 000 руб.</h4>
                            </div>
                        </div> */}
                        {/* <div className="tir_card">
                            <img src={Tir1} alt="" />
                            <div className="tir_card_child">
                            <h3>Станки и оборудование</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.</p>
                            <h4>20 000 руб.</h4>
                            </div>
                        </div>
                        <div className="tir_card">
                            <img src={Tir1} alt="" />
                            <div className="tir_card_child">
                            <h3>Станки и оборудование</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.</p>
                            <h4>20 000 руб.</h4>
                            </div>
                        </div> */}
                    </div>
                
            </div>
        </section>

        <section className="master">
            <div className="container">
                    <h1>Этапы поставки </h1>
                <div className="master_box">

                        {masterItem}

                        <div className="master_card">
                            {/* <img src={Master1} alt="" />
                            <div className="master_card_text">
                                <h3>Предложение от продавца</h3>
                                <div className="master_row"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. </p>
                            </div> */}
                        </div>
                        {/* <div className="master_card">
                            <img src={Master1} alt="" />
                            <div className="master_card_text">
                                <h3>Предложение от продавца</h3>
                                <div className="master_row"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. </p>
                            </div>
                        </div>
                        <div className="master_card">
                            <img src={Master1} alt="" />
                            <div className="master_card_text">
                                <h3>Предложение от продавца</h3>
                                <div className="master_row"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. </p>
                            </div>
                        </div> */}
                </div>
            </div>
        </section>

        <section className="site">
            <div className="container">
                <h1>Нам доверяют</h1>
                <div className="site_box">

                    {siteItem}


                    {/* <div className="site_card"> */}
                        {/* <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p> */}
                    {/* </div> */}
                    {/* <div className="site_card">
                        <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p>
                    </div> */}
                    {/* <div className="site_card">
                        <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p>
                    </div>
                    <div className="site_card">
                        <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p>
                    </div>
                    <div className="site_card">
                        <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p>
                    </div>
                    <div className="site_card">
                        <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p>
                    </div>
                    <div className="site_card">
                        <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p>
                    </div>
                    <div className="site_card">
                        <img src={Site1} alt="" />
                        <h3>Росатом</h3>
                        <p>Корпорация атомной энергии</p>
                    </div> */}
                </div>
            </div>
        </section>

        <section className="man">
            <div className="container">
                <div className="man_box">


                    {manItem}


                    {/* <div className="man_card">
                        <div className="man_color"></div>
                        <img src={Man1} alt="" />
                        <div className="man_text">
                            <h3>Антон Макаров</h3>
                            <p>Руководитель компании</p>
                            <img src={Row} alt="" />
                            <div className="man_text_img">
                                <img src={Instagram} alt="" />
                                <img src={Wercel} alt="" />
                                <img src={In} alt="" />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="man_card">
                        <div className="man_color"></div>
                        <img src={Man1} alt="" />
                        <div className="man_text">
                            <h3>Антон Макаров</h3>
                            <p>Руководитель компании</p>
                            <img src={Row} alt="" />
                            <div className="man_text_img">
                                <img src={Instagram} alt="" />
                                <img src={Wercel} alt="" />
                                <img src={In} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="man_card">
                        <div className="man_color"></div>
                        <img src={Man1} alt="" />
                        <div className="man_text">
                            <h3>Антон Макаров</h3>
                            <p>Руководитель компании</p>
                            <img src={Row} alt="" />
                            <div className="man_text_img">
                                <img src={Instagram} alt="" />
                                <img src={Wercel} alt="" />
                                <img src={In} alt="" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

        <section className="inter">
            <div className="container">
                <div className="inter_box">
                    <img src={Inter} alt="" />
                </div>
            </div>
        </section>
      
    </main>
  )
}

export default Main