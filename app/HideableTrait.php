<?php

namespace App;

use App\Scopes\HidingScope;

trait HideableTrait {

	public static function bootHideableTrait() {
		static::addGlobalScope(new HidingScope);
	}

	public function getIsHideableAttribute()
	{
		return true;
	}

	public function getHiddenAtColumn()
	{
		return defined('static::HIDDEN_AT') ? static::HIDDEN_AT : 'hidden_at';
	}

    public function getQualifiedHiddenAtColumn()
    {
        return $this->getTable().'.'.$this->getHiddenAtColumn();
    }

    public function isHidden()
    {
    	return isset($this->hidden_at);
    }

    public function toggleVisibility()
    {
    	if($this->isHidden()) {
    		$this->unHide();
    	} else {
    		$this->hide();
    	}
    }

    public function hide()
    {
    	if(!$this->isHidden()) {
	    	$this->hidden_at = $this->freshTimestampString();
	    	$this->save();
    	}
    }

    public function unHide()
    {
    	if($this->isHidden()) {
    		$this->hidden_at = NULL;
    		$this->save();
    	}
    }
}