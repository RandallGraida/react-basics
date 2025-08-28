'use client'
import "./globals.css";
import { createRoot } from "react-dom/client";
/* --------------------- Describing the UI -------------------------------------
import PackingList from "./components/describing_the_ui/conditional-rendering";
import ReactBasics from "./components/overview";
import DescribingTheUi from "./components/describing_the_ui/describing-the-ui";
import RenderCurlyBraces from "./components/describing_the_ui/curly-braces";
import RenderPassingProps from "./components/describing_the_ui/passing-props";
import RenderRenderingList from "./components/describing_the_ui/rendering-lists";
import RenderKCP from "./components/describing_the_ui/keeping-components-pure";
import RenderMovieExplorer from "./components/describing_the_ui/movie_explorer/movie-explorer";
*/

// --------------------- Adding Interactivity ----------------------------------
// <RenderRespondingTE />
// <RenderState />
import RenderAndCommit from "./components/adding_interactivity/components/render-and-commit";
import { create } from "domain";

// Runs page

export default function MyApp() {
  return (
    <html>
      <body>
        <RenderAndCommit />
      </body>
    </html>
  );
}

// Return functions
// -------------- Describing the UI ----------------
/**
 * <ReactBasics />
 * <DescribingTheUi />  
 * <RenderCurlyBraces /> 
 * <RenderPassingProps />
 * <PackingList />
 * <RenderRenderingList />
 * <RenderKCP />
 */

// -------------- Adding Interactivity ----------------
/**
 * <RenderRespondingTE />
 * <RenderState />
 */