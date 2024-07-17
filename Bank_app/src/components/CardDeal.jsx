import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./button"
const CardDeal = () => (
  <section className={`${layout.section} sm:px-3 px-3`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better Card Deal <br className="sm:block hidden" />
        in Few steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolore
        assumenda consectetur, numquam possimus enim odio similique sequi! Quis
        quam consequatur repudiandae excepturi beatae. Voluptatem molestias
        beatae quis et impedit.
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
