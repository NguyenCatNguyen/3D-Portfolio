# 3D Porfolio
-  TechStack: `React.js`, `Three.js`, `TailwindCSS`, `React Three Fiber`.
- Build Tools: Vite.

#### Packages Installed
- `npm install react-three-fiber three`
- `npm install @react-three/drei`
- `npm install @react-three/fiber`
- Leva
  - `npm install leva`
-  


### Three.js Notes
1. Canvas
    - Canvas is the container for all the 3D objects.
    - Everything inside the Canvas is a 3D object.
```jsx
import { Canvas } from 'react-three-fiber';

return(
    <Canvas></Canvas>
)
```

### React Notes
##### UseState can also be use with Tenary Operator to display icons
```jsx
const [isOpen, setIsOpen] = useState(false);
return(
    <div>
       <img src={isOpen ? "close.png" : "open.png" }/>
    </div>
)
```

- Use Tenary Operator right inside the className to add or remove classes.
```jsx
<div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
</div>
```

###### Efficent way to create `NavList`
- Create NavItem component right on top of Nav component.
- Directly create a list of items inside the NavItem component.
```jsx
const NavItem = () => {
    return(
        <ul className='nal-ul'>
            {["Home", "About", "Project", "Contact"].map((item, index) => (
                <li key={index} className='nav-li'>
                    <a href="" className='nav-li_a'>{item}</a>
                </li>
            ))}
        </ul>
    )
}

const Nav = () => {
    return(
        <nav className='nav'>
            <NavItem />
        </nav>
    )
}
```