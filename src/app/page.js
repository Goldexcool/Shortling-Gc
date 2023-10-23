import Image from "next/image";
import "../Styles/Page.css";
import hero from "../Images/illustration-working.svg";
import brandReq from "../Images/icon-brand-recognition.svg";
import detRec from "../Images/icon-detailed-records.svg";
import fulCus from "../Images/icon-fully-customizable.svg";

export default function Home() {
  return (
    <main>
      {/* ########## Hero Section ############ */}
      <section className="herosection" id="herosection">
        <div className="hero_wrapper">
          <article className="hero_article">
            <h1>More than just shorter links</h1>
            <h2>
              Build brand's recognition and detailed insights on how links are
              performing.
            </h2>
            <button>Get Started</button>
          </article>
          <div className="heroimg">
            <Image src={hero} alt="" width={590} height={500} className="heroimg"/>
          </div>
        </div>
      </section>

      {/* ########### shortenLinking Section ########### */}
      <section className="shortlink_section" id="shortlink_section">
        <div className="sl_wrapper">
          <div className="input_btn">
            <input placeholder="Shorten a link here..." />
            <button>Shorten It!</button>
          </div>
        </div>
      </section>

      {/* ############ Advanced Statistics ############## */}
      <section className="adst_section" id="adst_section">
        <div className="adst_wrapper">
          <article className="adst_header_article">
            <h1>Advanced Statistics</h1>
            <h2>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </h2>
          </article>

          {/* ######## Card Section ######## */}
          <div className="stat_flex_wrapper">
            <div className="stat_flex">
              <div className="adst_image">
                <Image src={brandReq} alt="" width={40} height={40} />
              </div>
              <article className="stat_flex_article">
                <h1>Brand Recognition</h1>
                <h2>
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </h2>
              </article>
            </div>

            {/* #### Detailed Records #### */}

            <div className="stat_flex1">
              <div className="adst_image1">
                <Image src={detRec} alt="" width={40} height={40} />
              </div>
              <article className="stat_flex_article">
                <h1>Detailed Records</h1>
                <h2>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </h2>
              </article>
            </div>

            {/* #### Fully Customizable #### */}

            <div className="stat_flex2">
              <div className="adst_image">
                <Image src={fulCus} alt="" width={40} height={40} />
              </div>
              <article className="stat_flex_article">
                <h1>Fully Customizable</h1>
                <h2>
                  Improve brand awareness and content discoverability through
                  customizable links, superchanrging audience engagement.
                </h2>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ############# Last Section ############### */}
      <section className="lastsection" id="lastsection">
        <div className="ls_wrapper">
          <article className="ls_article">
            <h1>Boost your links today</h1>
            <button>Get Started</button>
          </article>
          </div>
      </section>
    </main>
  );
}
