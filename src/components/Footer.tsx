import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";
import { FaRegHeart } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="center"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} / </Text>
          <Text onBackground="neutral-weak">
            Made with{" "}
            <FaRegHeart style={{ color: "red" }}/>{" "}
            by{" "}
            <SmartLink
              style={{ marginLeft: "-0.125rem" }}
              href="https://linktr.ee/ashwig"
            >
              Ash Hellwig
            </SmartLink>
          </Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            with{" "}
            <SmartLink
              style={{ marginLeft: "-0.125rem" }}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
      </Flex>
      <Flex height="48" show="s"></Flex>
    </Flex>
  );
};
