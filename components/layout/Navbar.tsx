import React from "react";
import NextLink from "next/link";
import { Box, Button, HStack, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { signInWithGoogle } from "../../util/firebase";
import { useAuth } from "../auth/AuthUserProvider";

type NavLinkData = {
  name: string;
  path: string;
};

const navData: NavLinkData = {
  name: "Home",
  path: "/",
};

const savedRecipes: NavLinkData = {
  name: "Recipes",
  path: "/RecipesPage",
};

const NavLink = ({ name, path }: NavLinkData) => {
  const { pathname: currentPath } = useRouter();
  return (
    <NextLink key={path} href={path} passHref legacyBehavior>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        tabIndex={-1}
      >
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"purple"}
          variant={currentPath === path ? "solid" : "ghost"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  );
};

const Navbar = () => {
  const { user, signOut } = useAuth();
  return (
    <Box px={4} shadow="base" top={0} left={0} right={0} zIndex={999}>
      <HStack justifyContent="space-between">
        <HStack h={14} as="nav" spacing={4} alignItems="center">
          <NavLink {...navData} />
          <NavLink {...savedRecipes} />
        </HStack>
        <HStack>
          <Button
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"purple"}
            onClick={user ? signOut : signInWithGoogle}
          >
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
