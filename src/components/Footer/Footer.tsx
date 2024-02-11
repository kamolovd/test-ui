import React from "react";
import AppGallery from "../../images/app_gallery.svg";
import AppStore from "../../image/app_store.svg";
import FB from "../../image/facebook.svg";
import GooglePlay from "../../image/google_play.svg";
import IG from "../../image/instagram.svg";
import TG from "../../image/telegram.svg";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <section className={styles.footer_container}>
      <footer className={styles.footer}>
        {/* Stores */}
        <div className={styles.store_container}>
          <p className={styles.primary_text}>Приложения</p>
          <div className={styles.store_container_image}>
            <img src={AppStore} alt="app_store_icon" />
            <img src={GooglePlay} alt="google_play_icon" />
            <img src={AppGallery} alt="app_gallery_icon" />
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.social_container}>
          <p className={styles.primary_text}>Следите за нами в соцсетях</p>
          <div className={styles.social_container_image}>
            <img src={IG} alt="instagram_link" />
            <img src={TG} alt="telegram_link" />
            <img src={FB} alt="facebook_link" />
          </div>
        </div>

        {/* Contacts */}
        <div className={styles.contacts_container}>
          <div className={styles.contacts_container_item}>
            <a href="tel:544">544</a>
            <p>Для звонков с мобильных в Таджикистане</p>
          </div>
          <div className={styles.contacts_container_item}>
            <a href="tel:+992887775544">
              +992&thinsp;88&thinsp;777&thinsp;55&thinsp;44
            </a>
            <p>Для звонков из любой точки мира</p>
          </div>
        </div>
        {/* Links to another websites */}
        <nav className={styles.footer_links}>
          <a>Хумо Онлайн</a>
          <a>Вакансии</a>
          <a>Карты Visa</a>
          <a>Кредиты</a>
          <a>Вклад &mdash; Сарчашма</a>
          <a>Валюты</a>
          <a>Денежные переводы</a>
        </nav>
        <hr className={styles.divider} />
        {/* Licenses */}
        <ul className={styles.license}>
          <li>&copy; 2022 ЗАО МДО «Хумо»</li>
          <li>Лицензия НБТ №0000077 от 24 мая 2017 г.</li>
          <li>
            ЗАО МДО «Хумо» микрофинансовая организация в Таджикистане,{" "}
            обслуживающая более 100 000 клиентов.
          </li>
        </ul>
      </footer>
    </section>
  );
}
