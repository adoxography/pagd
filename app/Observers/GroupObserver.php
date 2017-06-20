<?php

namespace App;

use App\Group;

class GroupObserver {

	public function deleting(Group $group)
	{
		if($group->parent) {
			foreach($group->languages as $language) {
				$language->update(['group_id' => $group->parent_id]);
			}
		}
	}

}