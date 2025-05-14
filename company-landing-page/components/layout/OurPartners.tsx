import Image from "next/image";
import styles from "./styles.module.css";

export function OurPartners() {
  const images = [
    "/partners/1.png",
    "/partners/2.png",
    "/partners/3.png",
    "/partners/4.png",
    "/partners/5.png",
    "/partners/6.png",
    "/partners/7.png",
    "/partners/8.png",
    "/partners/9.png",
    "/partners/10.png",
    "/partners/11.png",
    "/partners/12.png",
    "/partners/13.png",
    "/partners/14.png",
    "/partners/15.png",
    "/partners/16.png",
    "/partners/17.png",
  ];

  return (
    <>
    <div className=" text-black dark:text-white text-center mt-10 text-4xl md:text-4xl font-bold mb-6">Our Partners</div>
      <div className={styles.partners}>
        <div className={styles.slider}>
          <div className={styles["slide-track"]}>
            {images.map((img, index) => (
              <div key={index} className={styles.slide}>
                <Image
                  src={img}
                  alt={`Partner ${index + 1}`}
                  width={250}
                  height={100}
                  className={styles.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
