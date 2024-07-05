import {ReactNode} from "react";
import {FrameConnector} from "nebula-ds-react-library";
import Image from "next/image";
import vulcan from "../../public/vulcan.png";

export const AboutMe = (props: {
  className?: string;
}) => {
  return (
    <div className={`${props.className}`}>
      {/*about me section title*/}
      <div className="w-full flex gap-4 items-center">
        <h2 className="text-10 md:text-12">
          About me
        </h2>
        <FrameConnector className="w-full" divider/>
      </div>


      {/*about me section content*/}
      <div className="grid grid-cols-3 mt-14">
        <div className="col-span-full md:col-span-2">
          <span>
            From LEGO to Code: Crafting Digital Experiences
          </span>
          <br/>
          <br/>
          <p>
            As a <strong>software engineer</strong> with a passion for <strong>UX design</strong>, I blend technical
            expertise with
            creative
            problem-solving. My journey began in university, where I co-founded a startup and developed an Android
            app, honing my skills in <strong>client-side development</strong> and UI design.
          </p>
          <br/>
          <p>
            After graduation trough my career, I've taken on various roles, including <strong>Full-stack Software
            Engineer</strong>, <strong>Project Manager</strong>, <strong>Lead Developer</strong>, and <strong>UX
            Designer</strong>. Recently, I've been focusing on <strong>software architecture</strong> and <strong>efficient
            code structuring</strong>. I'm skilled in <strong>React</strong> and other <strong>frontend
            frameworks</strong>, and
            I'm proficient in <strong> end-to-end testing</strong> with tools like Cypress.
          </p>
          <br/>
          <p>
            Now, as a senior engineer with a strong foundation in both software engineering and design, I'm
            dedicated to continuous improvement and creating high-quality products. My blend of technical skills
            and design understanding helps me build robust and user-friendly solutions. I aim to ensure technology
            serves people, making the world a better place by putting users first.
          </p>
        </div>
        <div className="w-full h-full col-span-full md:col-span-1 flex justify-center items-center">
          <Image className="h-56 w-auto" src={vulcan} alt="nebula logo"/>
        </div>
      </div>
    </div>
  )
}
