import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
function Widgets() {
    const newsArticle = (heading,subtitle,subsubtitle)=>(
        <div className='widgets_article'>
            <div className="widgets_articleLeft">
                <DoubleArrowIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
                <p>{subsubtitle}</p>
            </div>
        </div>
    )



  return (
    <div className='widgets'>
            <div className="widgets_header">
                <h2>Curriculum Vitae</h2>
                <InfoIcon/>
            </div>
            {newsArticle("College Name","Sunrise Institute Mandsaur","First year {B.C.A.}")}
            {newsArticle("Previous College","Vikram University Neemuch ","62% B.sc(BIO)")}
            {newsArticle("Experience","MPPOLICE ","Constable 2018-on")}
            {newsArticle("12TH","JNV Rampura","78%")}
            {newsArticle("10TH","JNV Rampura","9.8 CGPA")}
            {newsArticle("Gmail Account","deepak040599@gmail.com")}
            {newsArticle("Github Account","deepak040599")}
            {newsArticle("Linkedin Account","Deepak Suthar")}
            {newsArticle("GFG Account","deepaksuthar")}
            {newsArticle("Leetcode Account","deepak040599")}
            {newsArticle("Professoin Certificate","Reactjs WorkShop","Doller-infotech")}
            {newsArticle("Problem Solving","DSA with c++","Abdul Bari,Love babber,kunal kushwah")}
            {newsArticle("Contact NO","9754610748","9669275420")}
    </div>
  )
}

export default Widgets