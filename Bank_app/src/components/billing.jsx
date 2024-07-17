import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const billing = () => (
  <section className={`${layout.sectionReverse} sm:px-3 px-3`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="bill"
        className="w-[100%] h-[100%] object-contain relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        error? Sed provident quaerat atque recusandae non perferendis? Dolore,
        doloribus illo a odit tempore temporibus, consequuntur, magnam commodi
        deserunt officia autem.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple" 
        className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="google" 
        className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
      </div>
    </div>
  </section>
);

export default billing;
