import { CONTACT } from "../constants";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-neutral-950 pb-20 border-b border-neutral-900">
      <h1 className="my-10 text-center text-4xl lg:text-5xl font-semibold text-neutral-300">
        Get In Touch
      </h1>

      <div className="max-w-3xl mx-auto text-center tracking-tighter px-6">
        <p className="text-neutral-400 text-lg mb-6">
          <FaMapMarkerAlt className="inline-block mr-3 text-purple-500" />
          {CONTACT.address}
        </p>
        <p className="text-neutral-400 text-lg mb-6">
          <FaEnvelope className="inline-block mr-3 text-purple-500" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-purple-300 transition duration-300"
          >
            {CONTACT.email}
          </a>
        </p>
        <p className="text-neutral-400 text-lg mb-6">
          <FaPhoneAlt className="inline-block mr-3 text-purple-500" />
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="hover:text-purple-300 transition duration-300"
          >
            {CONTACT.phoneNo}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
