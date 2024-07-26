import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Albatros',
    Svg: require('@site/static/img/undraw_albatros.svg').default,
    description: (
      <>
        Albatros is a development system for industrial automation logics, with trajectory generators that can interpolate several axes, up to 128. With this software you can configure machine groups and subgroups, combining each of them to the inputs (analog and digital sensors), outputs (analog and digital actuators), motor sources (analog and digital axes)
      </>
    ),
  },
  {
    title: 'TpaCAD',
    Svg: require('@site/static/img/undraw_tpacad.svg').default,
    description: (
      <>
       TpaCAD is Tpa’s CAD/CAM programming system for Microsoft Windows environments. It can interface with 3 or 5-axis CNC machining centres. TpaCAD can be used to work with several types of materials, such as wood, marble, metal, glass, and plastics.
      </>
    ),
  },
  {
    title: 'WSCM',
    Svg: require('@site/static/img/undraw_wscm.svg').default,
    description: (
      <>
        WSCM is our main software to manage the machine production cycle and its work plane.

The application, directly interfacing Albatros environment, so the numerical control, offers all the functions to interact with the machine. It directs the operations to create panels, the set-point process, the manual drive of one or more axes, the activation or deactivation of physical devices, and the arrangement of the work plane.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
