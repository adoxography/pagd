<?php

namespace App\Presenters;

class LanguagePresenter extends AlgPresenter {
    public function activity() {
        $activity = $this->model->activity;
        $activityPercentage = round($activity * 100);

        $html = "<progress class=\"progress language-activity is-success\" title=\"Activity\" value=\"$activityPercentage\" max=\"100\">";
        $html .= "$activityPercentage%";
        $html .= "</progress>";

        return $html;
    }
}
