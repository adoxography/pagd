<?php

namespace App\Http\Controllers;

use App\Slot;
use Illuminate\Http\Request;

/**
 * HTTP Controller for slots
 */
class SlotController extends ClosedController
{
    /**
     * Show the list of slots
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->setItems(Slot::orderBy('abv')->get());
        $this->setModel('slots');
        return parent::index();
    }

    /**
     * Show the slot details.
     *
     * @param \App\Slot The slot
     * @return \Illuminate\Http\Response
     */
    public function show(Slot $slot)
    {
        return parent::showItem($slot);
    }

    /**
     * Show the slot edit form
     *
     * @param \App\Slot The slot
     * @return \Illuminate\Http\Response
     */
    public function edit(Slot $slot)
    {
        return parent::editItem($slot);
    }

    /**
     * Update a slot
     *
     * @param \Illuminate\Http\Request
     * @param \App\Slot The slot
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Slot $slot)
    {
        return parent::updateItem($request, $slot);
    }

    /**
     * Destroy a slot
     *
     * @param \App\Slot The slot
     * @return \Illuminate\Http\Response
     */
    public function destroy(Slot $slot)
    {
        return parent::destroyItem($slot);
    }
}
