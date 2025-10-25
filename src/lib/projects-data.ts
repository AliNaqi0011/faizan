export type Project = {
  id: number;
  title: string;
  category: string;
  tech: string[];
  imageId: string;
  liveLink: string;
  description: string;
  longDescription: string;
};

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Industrial PLC Automation System",
    category: "Automation",
    tech: ["Siemens PLC", "HMI Design", "SCADA", "Control Systems"],
    imageId: "plc-automation",
    liveLink: "#",
    description: "Designed and implemented a PLC-based control system for a manufacturing line to improve efficiency and safety.",
    longDescription: "This project involved the complete lifecycle of an industrial automation solution for a key manufacturing line. The primary goal was to replace an outdated, manual control system with a fully automated PLC-based solution to increase throughput, reduce errors, and enhance operator safety. I was responsible for selecting the appropriate Siemens S7-1200 PLC and designing the control architecture. This included mapping all I/O points, developing ladder logic for process sequences, and implementing robust fault-handling routines. A major challenge was integrating the system with existing machinery, which required careful reverse-engineering of communication protocols. I also developed an intuitive HMI on a Weintek panel, providing operators with real-time process visualization, diagnostics, and control, which led to a 40% reduction in operator training time.",
  },
  {
    id: 2,
    title: "Solar Power Monitoring Platform",
    category: "Renewable Energy",
    tech: ["Python", "MATLAB", "Circuit Simulation", "Data Analysis"],
    imageId: "solar-power",
    liveLink: "#",
    description: "Developed a system to monitor and analyze the performance of a 50kW solar array, optimizing energy output.",
    longDescription: "To maximize the ROI of a commercial 50kW solar installation, I developed a comprehensive performance monitoring and analytics platform. The project addressed the challenge of identifying underperforming panels and predicting output based on weather conditions. Using Python, I created scripts to collect and parse data from inverters and environmental sensors. This data was then fed into a MATLAB model I designed to compare actual performance against theoretical maximum power point (MPP) tracking. The model successfully identified a 15% efficiency loss in one string due to shading that was previously unaccounted for. I simulated various circuit adjustments in Proteus to validate mitigation strategies before implementation. The final platform provides a daily performance report and alerts for maintenance, increasing the overall annual energy yield by an estimated 8%.",
  },
  {
    id: 3,
    title: "Smart Grid Load Balancing Simulation",
    category: "Power Systems",
    tech: ["MATLAB/Simulink", "Power System Analysis", "Algorithm Design"],
    imageId: "grid-management",
    liveLink: "#",
    description: "A simulation of a smart grid to test a novel algorithm for dynamic load balancing and outage prevention.",
    longDescription: "This research project focused on improving grid stability in residential areas with high EV penetration. I developed a detailed smart grid model in MATLAB/Simulink, simulating a microgrid with multiple feeders, residential loads, and distributed energy resources (DERs) like rooftop solar. The core of the project was designing and testing a novel decentralized load-balancing algorithm. The algorithm uses predictive analysis of load and generation to proactively shift non-critical loads (like EV charging) to off-peak times, thereby reducing peak demand and preventing transformer overloads. The simulation demonstrated that the algorithm could reduce peak load by up to 25% and decrease the probability of localized outages by 70% during high-demand scenarios, offering a scalable software solution to a critical hardware challenge.",
  },
  {
    id: 4,
    title: "EV Fast-Charging Station Control Logic",
    category: "Power Electronics",
    tech: ["C/C++", "Microcontrollers", "CAN Bus", "Power Electronics"],
    imageId: "ev-charging",
    liveLink: "#",
    description: "Firmware development for a microcontroller managing a DC fast-charging station, ensuring safety and efficiency.",
    longDescription: "I developed the embedded firmware for a microcontroller at the heart of a DC fast-charging station prototype. The system's primary challenge was managing the high-power transfer to an EV battery while adhering to strict safety protocols and communication standards like ISO 15118. I wrote C++ code for an STM32 microcontroller to control the power electronics (AC/DC and DC/DC converters), manage thermal monitoring of components, and handle the entire charging handshake sequence over the CAN bus. This involved implementing state machines to manage connection, isolation testing, pre-charging, and current regulation. A significant part of the project was developing robust fault detection logic to immediately and safely shut down the system in case of over-current, over-voltage, or thermal runaway, ensuring the prototype was both efficient and safe for operation.",
  },
];
