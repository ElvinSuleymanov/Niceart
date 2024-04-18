import { Breadcrumb, Flex, Form, Input } from 'antd';
import { HomeIcon } from 'assets/images/icons/home';
import useLocalization from 'assets/lang';
import  { useMemo } from 'react';
import { Routes } from 'router/routes';
import { useContactStyles } from './contact.style';
import ButtonComponent from 'core/shared/button/button.component';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const ContactComponent = () => {


    const classes = useContactStyles();
    const translate = useLocalization();
    const breadCrumbItems = useMemo(() => (
        
        [
          {
              title:<HomeIcon/>
          },
          {
              title:translate('contact'),
              path:Routes.contact
          }
      ]
    ), [translate]);

    const dubaiOperaCoordinates:LatLngExpression = useMemo(() => (
        [25.2048, 55.2708]
    ), []);
  return (
    <div>
        <Breadcrumb items={breadCrumbItems} className='py-30' />
            <Flex className={classes.flexColMobile}>
                <Flex gap={30} vertical className={classes.bannerInfo}>
                    <h1>
                        {translate('discoverUs')}
                    </h1>
                    <p>
                        {translate('discoverUsText')}
                    </p>
                    <h1>
                        {translate('visitUs')}
                    </h1>
                    <p>
                        {translate('visitUsText')}
                    </p>
                    <h1>
                        {translate('emailUs')}
                    </h1>
                </Flex>
                <div className={classes.images}>
                        <img src='https://s3-alpha-sig.figma.com/img/7f97/5ce6/f7a17efd8005578ee1a57614258d17c0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1oH~i1l9dc-gVhkJSzyqKUN3svqhT74j605J7N6Ok9TJo-8ILvplnJT2YopEx~LoFnvzsOzKUkw-I1TFOwir7HHHuPxLTqU6nb3Jjql0IwQwDvrG-cY797-BzD95Xpx8wLoFQLfS50ADTOQMvF7klJTaHd4pySZfNqCDMj52dui5TgPScwfDmYVXvmTir8wv5fs7HEFWOet0zGjHwlzfKVCxlZPl5AZY4I8xlaPDYzmqi1wHNyMXVI8xr5p5KN7ctIMg3eMteQWj~bWw8HbB9-Hy2bh3vnsGKP8RPpxV9pAntJ8ekcpmBsbmpi4pC99sqMbcGaeF6KMU-dHnyrn1w__' alt='' />
                        <img src='https://s3-alpha-sig.figma.com/img/4afd/d3b0/05cf3b308c6ca63eb5f4cccba78c3a8a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6TaRJTZc8TYXxoTeGlo4XgwGTVbk1DSO5yag8wPdffG5mSjfcfN-7Cmw0njsK3aaokAXcw9li9UZQDQm552VR288PySlm3kRJkrY8WlbN7LOERYes1QjnWF5WfdxKLw6EUwSCy7Z05cnfbj-mYkXCtofGo9Vxp5xw9gUl71L~9Y6FjZC9GKztfgNJOJ3O~2ZRbC1yvTViONYA2NIo2i-Xb7WkSCdTE~RRbRuYYzJlpyHJnCtrI6X9OQfWK9TDb8Zz6rzPn1grcFujs4odb6HBpvjCsstckpygAYl07DsdtUzwxRGnj3N6iTmrXL~Vl35kPh7ZBqByGAHHskkpjwQQ__' alt='' />
                        <img src='https://s3-alpha-sig.figma.com/img/e413/4d99/299b72f97845ec0b5b8261cbe992e006?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpaR3WFgBwfzSh~l8zkn-FVZY4x6uc3VsP0K7PUmT-nHuNuaF~qu7v23u4kAGSXivYRpqJlxi9vbe~KX0RbkEQvRQfoEpieHstf~-8tf9NYaPzUpYCpPVusloYl9gO6AqRbvnh9nULOAhv-J6R3wsPhfWsR66miYrHaCSNp4R6s126XW9IZ~GtP0AwBzdy8U8PbwWbXiAGLZVVBzA1DLudmlhktbxhDL3wwfLMoXRN6YHqvuo6SMz0M6P8As9MxvkaHAxJ9JIvIvD0J0QAzjTLoIhx7kVJx88FOoidVAdc5Nnb18zpGetRHYXjLOb02hBB03l764K7SRZ-8AkPymUw__' alt='' />
                        <img src='https://s3-alpha-sig.figma.com/img/4afd/d3b0/05cf3b308c6ca63eb5f4cccba78c3a8a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6TaRJTZc8TYXxoTeGlo4XgwGTVbk1DSO5yag8wPdffG5mSjfcfN-7Cmw0njsK3aaokAXcw9li9UZQDQm552VR288PySlm3kRJkrY8WlbN7LOERYes1QjnWF5WfdxKLw6EUwSCy7Z05cnfbj-mYkXCtofGo9Vxp5xw9gUl71L~9Y6FjZC9GKztfgNJOJ3O~2ZRbC1yvTViONYA2NIo2i-Xb7WkSCdTE~RRbRuYYzJlpyHJnCtrI6X9OQfWK9TDb8Zz6rzPn1grcFujs4odb6HBpvjCsstckpygAYl07DsdtUzwxRGnj3N6iTmrXL~Vl35kPh7ZBqByGAHHskkpjwQQ__' alt='' />
                </div>
            </Flex>
            <Flex className={classes.formContainer} gap={70} justify='space-between'>
                <Flex vertical className={classes.formText}>
                    <h1 className={classes.title}>
                        {translate('contactFormTitle')}
                    </h1>
                    <p>
                        {translate('contactFormText')}
                    </p>
                </Flex>
                <Form  layout='vertical' className={classes.form}>
                    <Form.Item label={translate('email')} name={'email'}>
                        <Input placeholder={translate('email')}/>
                    </Form.Item>
                    <Flex gap={33}>
                        <Form.Item className='w-100' label={translate('contactNumber')} name={'phoneNumber'}>
                            <Input placeholder={translate('message')}/>
                        </Form.Item>
                        <Form.Item  className='w-100' label={translate('subject')} name={'subject'}>
                            <Input placeholder={translate('message')}/>
                        </Form.Item>
                    </Flex>
                
                    <Form.Item label={'message'} name={'message'}>
                        <Input placeholder={translate('message')}/>
                    </Form.Item>
                    <ButtonComponent type='primary' htmlType='submit'>
                        {translate('submit')}
                    </ButtonComponent>
                </Form>
            </Flex>
        <MapContainer  center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker  position={dubaiOperaCoordinates}>

            </Marker>
        </MapContainer>
    </div>
  );
};

export default ContactComponent;