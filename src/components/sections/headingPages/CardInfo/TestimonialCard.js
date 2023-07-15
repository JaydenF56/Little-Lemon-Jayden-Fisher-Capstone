import React from 'react';
import SophiaImage from '../../../../assets/sophia.png';
import OliviaImage from '../../../../assets/olivia.jpg';
import EthanImage from '../../../../assets/ethan.jpg';
import EmilyImage from '../../../../assets/emily.png';
import DanielImage from '../../../../assets/daniel.png';
import SamanthaImage from '../../../../assets/samantha.png';
import AidenImage from '../../../../assets/aiden.jpg';
import IsabellaImage from '../../../../assets/isabella.jpg';

export default function TestimonialCard(props) {
  let imageSource;
  switch (props.name) {
    case 'Sophia Martinez':
      imageSource = SophiaImage;
      break;
    case 'Olivia Johnson':
      imageSource = OliviaImage;
      break;
    case 'Ethan Thompson':
      imageSource = EthanImage;
      break;
    case 'Emily Wilson':
      imageSource = EmilyImage;
      break;
    case 'Daniel Lee':
      imageSource = DanielImage;
      break;
    case 'Samantha Rodriguez':
      imageSource = SamanthaImage;
      break;
    case 'Aiden Campbell':
      imageSource = AidenImage;
      break;
    case 'Isabella Roberts':
      imageSource = IsabellaImage;
      break;
  }

  return (
    <article className="testimonial-card">
      <img src={imageSource} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </article>
  );
}