import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: "en", lang: "English", flag: "./flag/English.png" },
    { code: "fr", lang: "French", flag: "./flag/French.png"},
    { code: "ar", lang: "Arabic", flag: "./flag/arabic.png" },
];
const LanguageSelector = () => {
    const [menu, setMenu] = useState(false);
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const toggle = () => {
        setMenu(!menu);
    };
    return (
        // <div className='btn-container'>
        //     {
        //         languages.map((lng) => {
        //             return (
        //                 <button
        //                     className={lng.code === i18n.language ? "selected" : ""}
        //                     key={lng.code}
        //                     onClick={() => changeLanguage(lng.code)}
        //                 >
        //                     {lng.lang}
        //                 </button>
        //             );
        //         })
        //     }
        // </div>
        <Dropdown isOpen={menu} toggle={toggle}>
            <DropdownToggle tag="button">
                <img />
            </DropdownToggle>
            <DropdownMenu>
                {
                    languages.map((lng) => {
                        // return (
                        //     <NavLink
                        //         key={lng.code}
                        //         onClick={() => changeLanguage(lng.code)}
                        //     >
                        //         <img />
                        //         <span>{lng.lang}</span>
                        //     </NavLink>
                        // )
                        return (
                            <DropdownItem
                                key={lng.code}
                                onClick={() => changeLanguage(lng.code)}
                            >
                                <ul>
                                    <li>
                                    <img src={lng.flag} />
                                    {lng.lang}
                                    </li>
                                </ul>

                            </DropdownItem>
                        );
                    })
                }
            </DropdownMenu>

        </Dropdown>
    )
}

export default LanguageSelector