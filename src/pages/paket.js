import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CardMenuPaket from "../component/CardMenuPaket";
import PageTemplate from "../layout/PageTemplate";
import { MENU_API } from "../constant";
import { NavFilter, MenuWrapper } from "../layout/MenuComponents";
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
export default function Paket() {
  const [menus, setMenu] = useState([]);
  const [displayedMenu, setDisplayedMenu] = useState([]);
  useEffect(() => {
    fetch(MENU_API)
      .then((res) => res.json())
      .then((data) => {
        setMenu([...data.nasi_box, ...data.tumpeng]);
        console.log(data);
      });
  }, []);
  const thumbData = useStaticQuery(graphql`
    query myQuery {
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
      <Wrapper>
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
          {/* nasi box label */}
          <label
            htmlFor={"nasiBox-radio"}
            onClick={() => {
              setDisplayedMenu(
                menus.filter((menu) => {
                  if (menu.category == "nasi-box") return menu;
                })
              );
            }}
          >
            <input name="category" id={"nasiBox-radio"} type="radio" />
            <span className="">Nasi Box</span>
          </label>
          {/* tumpeng label */}
          <label
            htmlFor={"tumpeng-radio"}
            onClick={() => {
              setDisplayedMenu(
                menus.filter((menu) => {
                  if (menu.category == "tumpeng") return menu;
                })
              );
            }}
          >
            <input name="category" id={"tumpeng-radio"} type="radio" />
            <span className="">Tumpeng</span>
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
                  <CardMenuPaket
                    dangerouslySetInnerHTML={{ __html: element.description }}
                    key={id}
                    image={
                      <GatsbyImage image={thumbImage} alt={element.image} />
                    }
                    title={element.name}
                    bodyText={<>{element.description}</>}
                    price={element.price}
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
                console.log(thumbMenu);
                const thumbImage =
                  thumbMenu?.node.childImageSharp.gatsbyImageData;
                console.log(thumbImage);
                return (
                  <CardMenuPaket
                    key={id}
                    image={
                      <GatsbyImage image={thumbImage} alt={element.image} />
                    }
                    title={element.name}
                    bodyText={"<strong>hello<strong/>"}
                    price={element.price}
                  />
                );
              })}
        </MenuWrapper>
      </Wrapper>
    </PageTemplate>
  );
}
