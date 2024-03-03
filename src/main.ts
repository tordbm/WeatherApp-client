import { createApp } from "vue";
import App from "@/App.vue";
import { router } from "@/router/router";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
    BarElement,
} from 'chart.js'
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

const app = createApp(App).use(router);
router.isReady().then(() => app.mount("#app"));
