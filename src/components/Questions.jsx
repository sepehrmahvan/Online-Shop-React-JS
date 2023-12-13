import questionLogo from "../images/questions.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./questions.scss";
import { Link } from "react-router-dom";

export default function Questions() {
  return (
    <div className="questions">
      <div className="questions-img">
        <img src={questionLogo} alt="questions" />
      </div>
      <div className="questions-container">
        <h2 className="questions-title">سوالات متداول</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>سوال اول</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم
              ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون
              معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی
              و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای
              پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>سوال دوم</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم
              ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون
              معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی
              و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای
              پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>سوال دوم</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم
              ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون
              معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی
              و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای
              پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>سوال دوم</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم
              ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون
              معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی
              و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای
              پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>سوال دوم</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم
              ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون
              معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی
              و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای
              پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Link className="more-questions" to={'/common-questions'}>نمایش بیشتر</Link>
      </div>
    </div>
  );
}
