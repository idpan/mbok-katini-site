import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CardMenuAlacart from "../component/CardMenuAlacart";
import MenuLayout from "../layout/MenuComponents";
import PageTemplate from "../layout/PageTemplate";
import { NavFilter, MenuWrapper } from "../layout/MenuComponents";
import { MENU_API } from "../constant";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const Wrapper = styled.div`
  padding-top: 90px;
  .menu-container {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    justify-items: center;
    grid-row-gap: 60px;
    grid-column-gap: 20px;
  }
`;
export default function Menu(props) {
  const [menus, setMenu] = useState([]);
  const [displayedMenu, setDisplayedMenu] = useState([]);
  useEffect(() => {
    fetch(MENU_API)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.alacart);
      });
  }, []);
  const thumbData = useStaticQuery(graphql`
    query myquery {
      allFile(filter: { relativeDirectory: { eq: "thumb" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
              }
              gatsbyImageData(
                formats: WEBP
                placeholder: DOMINANT_COLOR
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  `).allFile.edges;

  return (
    <PageTemplate>
      <Wrapper className="">
        <NavFilter>
          {/* all label */}
          <label
            htmlFor={"all-radio"}
            onClick={() => {
              setDisplayedMenu(menus);
            }}
          >
            <input
              defaultChecked
              name="category"
              id={"all-radio"}
              type="radio"
            />

            <span className="">Semua</span>
          </label>
          {/* mie label */}
          <label
            htmlFor={"mie-radio"}
            onClick={() => {
              setDisplayedMenu(
                menus.filter((menu) => {
                  if (menu.category == "mie-ayam" || menu.category == "mie")
                    return menu;
                })
              );
            }}
          >
            <input name="category" id={"mie-radio"} type="radio" />
            <span className="">Aneka Mie</span>
          </label>
          {/* goreng label */}
          <label
            htmlFor={"goreng-radio"}
            onClick={() => {
              setDisplayedMenu(
                menus.filter((menu) => {
                  if (menu.category == "goreng") return menu;
                })
              );
            }}
          >
            <input name="category" id={"goreng-radio"} type="radio" />
            <span className="">Goreng - goreng</span>
          </label>
          {/* bakaran label */}
          <label
            htmlFor={"bakar-radio"}
            onClick={() => {
              setDisplayedMenu(
                menus.filter((menu) => {
                  if (menu.category == "bakar") return menu;
                })
              );
            }}
          >
            <input name="category" id={"bakar-radio"} type="radio" />
            <span className="">Bakaran</span>
          </label>
          {/* nasi goreng label */}
          <label
            htmlFor={"nasiGoreng-radio"}
            onClick={() => {
              setDisplayedMenu(
                menus.filter((menu) => {
                  if (menu.category == "nasi-goreng") return menu;
                })
              );
            }}
          >
            <input name="category" id={"nasiGoreng-radio"} type="radio" />
            <span className="">Nasi Goreng</span>
          </label>
          {/* minuuman label */}
          <label
            htmlFor={"minuman-radio"}
            onClick={() => {
              setDisplayedMenu(
                menus.filter((menu) => {
                  if (menu.category == "minuman") return menu;
                })
              );
            }}
          >
            <input name="category" id={"minuman-radio"} type="radio" />
            <span className="">Minuman</span>
          </label>
        </NavFilter>
        <MenuWrapper className=" menu-container my-container">
          {displayedMenu[0] == undefined
            ? menus.map((element, id) => {
                const thumbMenu = thumbData.find(
                  (el) =>
                    el.node.childImageSharp.fluid.originalName ==
                      element.image + ".jpg" ||
                    el.node.childImageSharp.fluid.originalName ==
                      element.image + ".jpeg"
                );
                const thumbImage =
                  thumbMenu?.node.childImageSharp.gatsbyImageData;
                return (
                  <CardMenuAlacart
                    key={id}
                    image={
                      <GatsbyImage image={thumbImage} alt={element.image} />
                    }
                    title={element.name}
                    bodyText={element.description}
                  />
                );
              })
            : displayedMenu.map((element, id) => {
                const thumbMenu = thumbData.find(
                  (el) =>
                    el.node.childImageSharp.fluid.originalName ==
                      element.image + ".jpg" ||
                    el.node.childImageSharp.fluid.originalName ==
                      element.image + ".jpeg"
                );
                const thumbImage =
                  thumbMenu?.node.childImageSharp.gatsbyImageData;
                return (
                  <CardMenuAlacart
                    key={id}
                    image={
                      <GatsbyImage image={thumbImage} alt={element.image} />
                    }
                    title={element.name}
                    bodyText={element.description}
                  />
                );
              })}
        </MenuWrapper>
      </Wrapper>
    </PageTemplate>
  );
}
