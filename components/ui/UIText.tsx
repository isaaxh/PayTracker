import { Text } from "react-native";
import React, { ReactNode, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { TextProps } from "react-native-svg";
import { cn } from "@/utils/cn";

/* textHeader1 */
/* textHeader2 */
/* textHeader3 */
/* textSubHeader1 */
/* textSubHeader2 */

interface UITextProps extends TextProps, VariantProps<typeof txtStyles> {
  children: ReactNode;
  textStyles?: string;
}

const textVariants = {
  variant: {
    base: ["text-base text-textLight dark:text-textDark"], // 16px
    header: ["text-2xl mt-4 mb-1.5"], // 24px
    header2: [""], // 20px
    header3: ["text-lg font-medium"], // 16px
    subHeader: ["text-xs text-tintLight dark:text-tintDark"], // 16px
    subHeader2: ["text-xs text-gray-500"], // 12px
  },
};

const txtStyles = cva(textVariants.variant.base, {
  variants: textVariants,
  defaultVariants: {
    variant: "base",
  },
});

const UIText = forwardRef<Text, UITextProps>((Props: UITextProps, ref) => {
  const { children, variant, textStyles, ...props } = Props;
  return (
    <Text
      ref={ref}
      className={cn(txtStyles({ variant }), textStyles)}
      {...props}
    >
      {children}
    </Text>
  );
});

export default UIText;
