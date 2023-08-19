import img from "./about_us.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="row justify-content-center ">
        <div style={{ marginLeft: "20px" }} className="col-md-6 col-sm-12">
          <img
            style={{ height: "30vh" }}
            className="w-100 mt-4"
            src={img}
            alt=""
          />
          <h3 className="mb-2 mt-2">About Us</h3>
          <hr />
          <p>
            Centre for Development of Advanced Computing (C-DAC) is the premier
            R&D organization of the Ministry of Electronics and Information
            Technology (MeitY) for carrying out R&D in IT, Electronics and
            associated areas. Different areas of C-DAC, had originated at
            different times, many of which came out as a result of
            identification of opportunities.
            <ul>
              <li className="mt-3">
                The setting up of C-DAC in 1988 itself was to built
                Supercomputers in context of denial of import of Supercomputers
                by USA. Since then C-DAC has been undertaking building of
                multiple generations of Supercomputer starting from PARAM with 1
                GF in 1988.
              </li>
              <li>
                Almost at the same time, C-DAC started building Indian Language
                Computing Solutions with setting up of GIST group (Graphics and
                Intelligence based Script Technology); National Centre for
                Software Technology (NCST) set up in 1985 had also initiated
                work in Indian Language Computing around the same period.
              </li>
              <li>
                Electronic Research and Development Centre of India (ER&DCI)
                with various constituents starting as adjunct entities of
                various State Electronic Corporations, had been brought under
                the hold of Department of Electronics and Telecommunications
                (now MeitY) in around 1988. They were focusing on various
                aspects of applied electronics, technology and applications.
              </li>
              <li>
                With the passage of time as a result of creative ecosystem that
                got set up in C-DAC, more areas such as Health Informatics,
                etc., got created; while right from the beginning the focus of
                NCST was on Software Technologies; similarly C-DAC started its
                education & training activities in 1994 as a spin-off with the
                passage of time, it grew to a large efforts to meet the growing
                needs of Indian Industry for finishing schools.
              </li>
            </ul>
            C-DAC has today emerged as a premier R&D organization in IT&E
            (Information Technologies and Electronics) in the country working on
            strengthening national technological capabilities in the context of
            global developments in the field and responding to change in the
            market need in selected foundation areas. In that process, C-DAC
            represents a unique facet working in close junction with MeitY to
            realize nation’s policy and pragmatic interventions and initiatives
            in Information Technology. As an institution for high-end Research
            and Development (R&D), C-DAC has been at the forefront of the
            Information Technology (IT) revolution, constantly building
            capacities in emerging/enabling technologies and innovating and
            leveraging its expertise, caliber, skill sets to develop and deploy
            IT products and solutions for different sectors of the economy, as
            per the mandate of its parent, the Ministry of Electronics and
            Information Technology, Ministry of Communications and Information
            Technology, Government of India and other stakeholders including
            funding agencies, collaborators, users and the market-place.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;