import { Breadcrumb, Flex, Form, Input } from 'antd';
import { HomeIcon } from 'assets/images/icons/home';
import useLocalization from 'assets/lang';
import  { useEffect, useMemo } from 'react';
import { Routes } from 'router/routes';
import { useContactStyles } from './contact.style';
import ButtonComponent from 'core/shared/button/button.component';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useContact, useContactFiles } from '../../core/common/contact/contact.query';
import { store } from 'store/store.config';
import { setContact } from 'store/store.reducer';

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
    const {data:contact} = useContact();
    const {data:contactFiles} = useContactFiles();

    const englandOperaCoordinates:LatLngExpression = useMemo(() => (
        [51.5074, -0.1278]), []);
   
    useEffect(() => {
        if (contact) store.dispatch(setContact(contact as IContactResponse));
    }, [contact]);    
            
  return (
    <div>
        <Breadcrumb items={breadCrumbItems} className='py-30' />
            <Flex className={classes.flexColMobile}>
                <Flex gap={30} vertical className={classes.bannerInfo}>
                    <h1>
                        {translate('discover_us')}
                    </h1>
                    <p>
                        {translate('discover_us_text')}
                    </p>
                    <h1>
                        {translate('visit_us')}
                    </h1>
                    <p>
                        {contact && contact.record.location}
                    </p>
                    <h1>
                        {translate('email_us')}
                    </h1>
                    <p>
                        {contact && contact.record.email}
                    </p>
                </Flex>
                <div className={classes.images}>
                    {
                        contactFiles?.record.map(el => (
                            <img src={el.url} alt='' />
                        ))
                    }
                </div>
            </Flex>
            <Flex className={classes.formContainer} gap={70} justify='space-between'>
                <Flex vertical className={classes.formText}>
                    <h1 className={classes.title}>
                        {translate('contact_form_title')}
                    </h1>
                    <p>
                        {translate('contact_form_text')}
                    </p>
                </Flex>
                <Form  layout='vertical' className={classes.form}>
                    <Form.Item label={translate('email')} name={'email'}>
                        <Input placeholder={translate('email')}/>
                    </Form.Item>
                    <Flex gap={33}>
                        <Form.Item className='w-100' label={translate('contact_number')} name={'phoneNumber'}>
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
        <MapContainer className={classes.mapContainer} center={[51.505, -0.09]} zoom={13} style={{ height: '400px'}}>
            <TileLayer
                url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                    attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
            />
            <Marker position={englandOperaCoordinates} >
            </Marker>
       </MapContainer>
    </div>
  );
};

export default ContactComponent;
