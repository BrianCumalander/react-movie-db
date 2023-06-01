import React from 'react';
// styles

import { Wrapper, Content, Text } from './HeroImage.styles';

// props come directly from the api, which is returning the url to the actual content.
const HeroImage = ({ image, title, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;





// import React from 'react'
// // styles

// import { Wrapper, Content, Text } from './HeroImage.styles';

// //currently assuming props comes directly from the api, which is returning the url to the actual content.
// const HeroImage = ({ image, title, text }) => (
//     <Wrapper image={image}>
//         <Content>
//             <Text>
//                 <h1>{title}</h1>
//                 <p>{text}</p>
//             </Text>
//         </Content>
//     </Wrapper>
// );

// export default HeroImage;