import classNames from "classnames";
import useLocalization from "assets/lang";
import { useMemo } from "react";
import { Col, Flex, Row, Typography } from "antd";
import { Logo } from "assets/images/icons/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "assets/images/icons/socials";
import {
  EnvelopeIcon,
  LocationIcon,
  PhoneIcon,
} from "assets/images/icons/envelope";
import { useFooterStyles } from "./footer.style";
import { environment } from "core/configs/app.config";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const classes = useFooterStyles();
  const projectName = environment.applicationName;
  const date = new Date().getFullYear();
  const translate = useLocalization();

  const footerClasses = useMemo(
    () =>
      classNames({
        [classes.footer]: true,
        "py-100": true,
      }),
    [classes.footer]
  );

  return (
    <div className={classes.footerContainer}>
      <footer className={footerClasses}>
        <Row className={classes.footerSm}>
          <Col lg={6} md={12} xs={24}>
            <Flex vertical gap={20}>
              <Link to={"/"}>
                <Logo />
              </Link>
              <p>{translate("footerText")}</p>
              <Flex gap={15} align="center">
                <Link to={""}>
                  <FacebookIcon />
                </Link>
                <Link to={""}>
                  <TwitterIcon />
                </Link>
                <Link to={""}>
                  <InstagramIcon />
                </Link>
                <Link to={""}>
                  <LinkedinIcon />
                </Link>
                <Link to={""}>
                  <YoutubeIcon />
                </Link>
              </Flex>
            </Flex>
          </Col>

          <Col lg={6} md={12} xs={24}></Col>

          <Col lg={6} md={12}>
            <Flex vertical gap={15}>
              <Typography.Title level={5}>{translate("site")}</Typography.Title>
              <Typography.Link style={{ cursor: "pointer", color: "black" }}>
                {translate("homepage")}
              </Typography.Link>
              <Typography.Link style={{ cursor: "pointer", color: "black" }}>
                {translate("aboutUs")}
              </Typography.Link>
              <Typography.Link style={{ cursor: "pointer", color: "black" }}>
                {translate("products")}
              </Typography.Link>
              <Typography.Link style={{ cursor: "pointer", color: "black" }}>
                {translate("partners")}
              </Typography.Link>
              <Typography.Link style={{ cursor: "pointer", color: "black" }}>
                {translate("contact")}
              </Typography.Link>
            </Flex>
          </Col>

          <Col lg={6} md={12}>
            <Flex vertical gap={15}>
              <Typography.Title level={5}>
                {translate("contactsUs")}
              </Typography.Title>
              <Flex gap={10} style={{ cursor: "pointer" }}>
                <EnvelopeIcon />
                contact@company.com
              </Flex>
              <Flex gap={10} style={{ cursor: "pointer" }}>
                <PhoneIcon />
                (414) 687 - 5892
              </Flex>
              <Flex gap={10} style={{ cursor: "pointer" }}>
                <LocationIcon />
                {translate("locationOfCompany")}
              </Flex>
            </Flex>
          </Col>
        </Row>
        <div className={classes.footerBottom}>
          <Row className="container py-60">
            <Col lg={12}>
              <Typography.Title level={5}>
                Copyright Ⓒ {date} {projectName}
              </Typography.Title>
            </Col>
            <Col lg={12}>
              <Flex gap={15}>
                <Typography>All Rights Reserved</Typography>
                <Typography
                  style={{
                    color: "#3E6F00",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Terms and Conditions
                </Typography>
                <Typography
                  style={{
                    color: "#3E6F00",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Privacy Policy
                </Typography>
              </Flex>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
