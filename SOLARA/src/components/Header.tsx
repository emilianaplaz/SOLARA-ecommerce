import React from "react";
import ShoppingCartIcon from "../../packages/ui/icons/ShoppingCartIcon";
import InputWithIcon from "../../packages/ui/SearchInput";
import HeartIcon from "../../packages/ui/icons/HeartIcon";
import UserProfileIcon from "../../packages/ui/icons/UserProfileIcon";
import MenuIcon from "../../packages/ui/icons/MenuIcon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className={`px-24 py-5 w-full flex justify-center items-center ${className}`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-12">
          <MenuIcon className="h-6 w-6 text-white" />
          <InputWithIcon
            id="search"
            name="search"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="font-logo font-bold text-5xl text-white">Solara</div>

        <div className="flex items-center space-x-12">
          <UserProfileIcon className="h-6 w-6 text-white" />
          <HeartIcon className="h-6 w-6 text-white" />
          <ShoppingCartIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </header>
  );
}
