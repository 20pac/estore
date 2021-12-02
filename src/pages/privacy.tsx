import React from "react";

import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "@public/assets/logo.svg";

const Privacy: NextPage = () => {
  const nextRouter = useRouter();
  return (
    <div className="p-3 md:p-5 xl:p-8 flex flex-col flex-1 w-screen">
      <div className="flex flex-row items-center mb-5 md:mb-8">
        <div className="w-5 cursor-pointer" onClick={() => nextRouter.push("/")}>
          <Image src={Logo} />
        </div>
        <h2
          className="text-transparent text-extraSmall lg:text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four cursor-pointer"
          onClick={() => nextRouter.push("/")}>
          Worldschool
        </h2>
      </div>
      <h1 className="text-small md:text-large font-bold self-start">Privacy Policy</h1>
      <h4 className="text-extraSmall md:text-small font-bold mt-6">
        What personal information is collected from you through the Websites?
      </h4>
      <ol>
        <li className="mt-5 leading-body text-mini md:text-extraSmall">
          1. Information collection and use. Worldschool is the sole owner of the information collected on the Websites.
          We will not sell, share, transfer or rent any personal information to others in ways different from what is
          disclosed in this Privacy Policy, the Terms & Conditions and the Terms of Use. Worldschool collects
          information from you on the &apos;Sign Up&apos; and &apos;Registration&apos; pages (&apos;Profile Pages&apos;)
          of the Websites. Worldschool reserves the rights to collect, disseminate, sell or otherwise disclose
          non-personal information provided by you.
        </li>
        <li className="mt-5 leading-body text-mini md:text-extraSmall">
          2. Registration. During the collection of information on the Profile Pages on the Websites, you are required
          to provide your applicable contact information (such as name, physician license information, e-mail address
          and the like). A mobile verification code and registration number is used to confirm your identity. An email
          address is also used to contact you about the materials and information on the Websites. When the Websites
          request for the confirmation of your identity, the Websites will clearly indicate the purpose of the inquiry
          before such information is requested. In the case of professional information, professional information
          provided by you to us will be authenticated against a third party provider.
        </li>
        <li className="mt-5 leading-body text-mini md:text-extraSmall">
          3. IP Addresses. Every computer connected to the Internet is given a domain name and a set of numbers that
          serve as that computer&apos;s Internet Protocol or IP address. When you browse the Websites, our web servers
          automatically recognize your domain name and IP address. The domain name and IP address reveal nothing
          personal about you other than the IP address from which you have accessed the Websites.
        </li>
        <li className="mt-5 leading-body text-mini md:text-extraSmall">
          4. Third Party Email Addresses. For the purposes of inviting and introducing third parties to Worldschool, You
          will be given the option to import or otherwise provide email addresses of third parties to Worldschool. On
          doing so, Worldschool will not store your (person who is already registered and inviting someone) any
          affiliate username and corresponding password.
        </li>
        <li className="mt-5 leading-body text-mini md:text-extraSmall">
          5. Privacy of Minors Worldschool strongly encourages parents and guardians to supervise the online activities
          of their minor children and consider using parental control tools available from online services and software
          manufacturers to help provide a child-friendly online environment. These tools also can prevent minors from
          disclosing their name, address, and other personally identifiable information online without parental
          permission. Please note that although the Websites are not intended for use by minors, Worldschool respects
          the privacy of minors who may inadvertently use the Internet.
        </li>
        <li className="mt-5 leading-body text-mini md:text-extraSmall">
          6. Opt Out Procedures. Upon initial communication from Worldschool, you may opt-out of receiving further
          communication from Worldschool. To be completely removed from the Worldschool mailing list, you may contact
          +91 86005 4884.
        </li>
      </ol>
    </div>
  );
};

export default Privacy;
